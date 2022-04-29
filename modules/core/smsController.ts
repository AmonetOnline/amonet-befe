
import * as CONFIG from '../config';
import { HTTPCode } from '../constants'

var twilio = require('twilio');

export async function sendOOBSecret(recepientNumber: string, secret: string) {
    var client = new twilio(CONFIG.SMS_SENDER.SID, CONFIG.SMS_SENDER.AUTH_TOKEN);
    const messageBody = "Your secret code is " + secret;
    let prefix = "00";
    let correctedRecepientNumber = recepientNumber;

    if (recepientNumber.startsWith(prefix) == true) {
        correctedRecepientNumber = recepientNumber.replace(new RegExp("^" + prefix), '+');
    }
    try {
        await client.messages.create({
            body: messageBody,
            to: correctedRecepientNumber,
            from: CONFIG.SMS_SENDER.PHONE_NUMBER.trim()
        }).then((message) => console.log(message.sid),
            (reason) => {
                throw {
                    status: HTTPCode.InternalError,
                    message: "Internal error"
                }
            });
    } catch (error) {
        throw {
            status: HTTPCode.InternalError,
            message: "Internal error"
        }
    }
}  