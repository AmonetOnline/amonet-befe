"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../constants/index");
const pathProvider_1 = require("../resources/pathProvider");
var fs = require('fs');
var HTMLName;
(function (HTMLName) {
    HTMLName["termsAndConditions"] = "terms-and-conditions";
    HTMLName["aboutUs"] = "about-us";
    HTMLName["contactUs"] = "contact-us";
    HTMLName["returnPolicy"] = "return-policy";
    HTMLName["howToBuy"] = "how-to-buy";
    HTMLName["paymentSuccess"] = "payment-success";
    HTMLName["paymentFailure"] = "payment-failure";
    HTMLName["paymentCancel"] = "payment-cancel";
})(HTMLName || (HTMLName = {}));
function loadHtml(htmlName, isPost, response, amount, transactionId, siteName, isCollecting) {
    const htlmContentController = new HtlmContentController();
    if (isPost == true && htlmContentController.allowedPostFor(htmlName) == false) {
        response.status(index_1.HTTPCode.NotFound).json("The content for " + htmlName + " was not found or does not support post");
        return;
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
            return htlmContentController.loadPaymentFailure(htmlName, amount, transactionId, siteName, response);
        default:
            return response.status(index_1.HTTPCode.NotFound).json("Failed to find the requested page:" + htmlName);
    }
}
exports.loadHtml = loadHtml;
class HtlmContentController {
    constructor() {
        this.postAllowedPath = [HTMLName.paymentSuccess, HTMLName.paymentFailure, HTMLName.paymentCancel];
    }
    allowedPostFor(htmlPage) {
        return this.postAllowedPath.indexOf(htmlPage) >= -1;
    }
    loadContent(htmlName, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = pathProvider_1.htmlDirectory() + htmlName + '.html';
            try {
                response.status(200).header({ "Content-Type": "text/html" });
                response.sendFile(fileName);
            }
            catch (error) {
                response.status(500).json(error.body || error.message);
            }
            return;
        });
    }
    loadPaymentSuccess(htmlName, collecting, amount, transactionId, siteName, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var fileName = pathProvider_1.htmlDirectory() + htmlName;
                if (collecting == true) {
                    fileName += '-collecting.html';
                }
                else {
                    fileName += '-delivering.html';
                }
                this.getAmmendedHTML(fileName, amount, transactionId, siteName, response);
            }
            catch (error) {
                response.status(500).json(error.body || error.message);
            }
        });
    }
    loadPaymentFailure(htmlName, amount, transactionId, siteName, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = pathProvider_1.htmlDirectory() + htmlName + '.html';
            try {
                this.getAmmendedHTML(fileName, amount, transactionId, siteName, response);
            }
            catch (error) {
                response.status(500).json(error.body || error.message);
            }
        });
    }
    loadPaymentCancelled(htmlName, amount, transactionId, siteName, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = pathProvider_1.htmlDirectory() + htmlName + '.html';
            try {
                this.getAmmendedHTML(fileName, amount, transactionId, siteName, response);
            }
            catch (error) {
                response.status(500).json(error.body || error.message);
            }
        });
    }
    getAmmendedHTML(fileName, amount, transactionId, siteName, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ammendedURL = yield new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    fs.readFile(fileName, 'utf8', function (err, html) {
                        if (err) {
                            return resolve(null);
                        }
                        var orderNumberRegex = /{order-number}/g;
                        var amountRegex = /{amount}/g;
                        var siteRegex = /{site}/g;
                        const ammendedURL = html.replace(orderNumberRegex, transactionId).replace(amountRegex, amount).replace(siteRegex, siteName);
                        return resolve(ammendedURL);
                    });
                }));
                if (ammendedURL == null) {
                    return response.status(500).json("File name is invalid");
                }
                response.status(200).header({ "Content-Type": "text/html" });
                response.end(ammendedURL);
            }
            catch (error) {
                return null;
            }
        });
    }
}
//# sourceMappingURL=htmlContentController.js.map