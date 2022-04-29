
import { Request, Response } from 'express';
import { HTTPCode, HTTPBodyKey } from '../../../constants/index';
import { htmlDirectory } from '../resources/pathProvider';
import { Observable } from 'rxjs/Observable';
var fs = require('fs');

enum HTMLName {
    termsAndConditions = "terms-and-conditions",
    aboutUs = "about-us",
    contactUs = "contact-us",
    returnPolicy = "return-policy",
    howToBuy = "how-to-buy",
    paymentSuccess = "payment-success",
    paymentFailure = "payment-failure",
    paymentCancel = "payment-cancel"
}

export function loadHtml(htmlName: String, isPost: Boolean, response: Response, amount: Number, transactionId: String, siteName: String, isCollecting?: Boolean) {

    const htlmContentController = new HtlmContentController();

    if (isPost == true && htlmContentController.allowedPostFor(htmlName) == false) {
        response.status(HTTPCode.NotFound).json("The content for " + htmlName + " was not found or does not support post");
        return
    }
    switch (htmlName) {
        case HTMLName.termsAndConditions:
        case HTMLName.aboutUs:
        case HTMLName.contactUs:
        case HTMLName.returnPolicy:
            return htlmContentController.loadContent(htmlName, response);
        case HTMLName.paymentCancel:
            return htlmContentController.loadPaymentCancelled(htmlName, amount, transactionId, siteName, response);
        case HTMLName.paymentSuccess:
            return htlmContentController.loadPaymentSuccess(htmlName, isCollecting, amount, transactionId, siteName, response);
         case HTMLName.paymentFailure:
            return htlmContentController.loadPaymentFailure(htmlName,amount, transactionId, siteName, response);
        default:
            return response.status(HTTPCode.NotFound).json("Failed to find the requested page:" + htmlName);
    }
}

class HtlmContentController {
    postAllowedPath: Array<String> = [HTMLName.paymentSuccess, HTMLName.paymentFailure, HTMLName.paymentCancel];

    public allowedPostFor(htmlPage: String): Boolean {
        return this.postAllowedPath.indexOf(htmlPage) >= -1
    }

    public async loadContent(htmlName: String, response: Response) {
        const fileName = htmlDirectory() + htmlName + '.html'
        try {
            response.status(200).header({ "Content-Type": "text/html" });
            response.sendFile(fileName);
        } catch (error) {
            response.status(500).json(error.body || error.message);
        }
        return;
    }

    public async loadPaymentSuccess(htmlName: String, collecting: Boolean, amount: Number, transactionId: String, siteName: String,response: Response,) {
        try {
            var fileName = htmlDirectory() + htmlName;
            if (collecting == true) {
                fileName += '-collecting.html';
            } else {
                fileName += '-delivering.html';
            }
            this.getAmmendedHTML(fileName, amount, transactionId, siteName, response);
        } catch (error) {
            response.status(500).json(error.body || error.message);
        }
    }

    public async loadPaymentFailure(htmlName: String, amount: Number, transactionId: String, siteName: String, response: Response) {
        const fileName = htmlDirectory() + htmlName + '.html'
        try {
            this.getAmmendedHTML(fileName, amount, transactionId, siteName, response);
        } catch (error) {
            response.status(500).json(error.body || error.message);
        }
    }


    public async loadPaymentCancelled(htmlName: String, amount: Number, transactionId: String, siteName: String, response: Response) {
        const fileName = htmlDirectory() + htmlName + '.html'
        try {
             this.getAmmendedHTML(fileName, amount, transactionId, siteName, response);

        } catch (error) {
            response.status(500).json(error.body || error.message);
        }

    }

    async getAmmendedHTML(fileName: String, amount: Number, transactionId: String, siteName: String, response: Response): Promise<any> {

        try {
            const ammendedURL = await new Promise(async (resolve, reject) => {
                fs.readFile(fileName, 'utf8', function (err, html) {
                    if (err) {
                        return resolve(null)
                    }
                    var orderNumberRegex = /{order-number}/g;
                    var amountRegex = /{amount}/g;
                    var siteRegex = /{site}/g;
                    const ammendedURL = html.replace(orderNumberRegex, transactionId).replace(amountRegex, amount).replace(siteRegex, siteName);
                    return resolve(ammendedURL);
                })
            });
         
            if (ammendedURL==null){
                return  response.status(500).json("File name is invalid");
            }
            response.status(200).header({ "Content-Type": "text/html" });
            response.end(ammendedURL);
       
        } catch (error) {
            return null
        }
    }
}