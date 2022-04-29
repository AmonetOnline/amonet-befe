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
const CONFIG = require("../config");
const constants_1 = require("../constants");
var twilio = require('twilio');
function sendOOBSecret(recepientNumber, secret) {
    return __awaiter(this, void 0, void 0, function* () {
        var client = new twilio(CONFIG.SMS_SENDER.SID, CONFIG.SMS_SENDER.AUTH_TOKEN);
        const messageBody = "Your secret code is " + secret;
        let prefix = "00";
        let correctedRecepientNumber = recepientNumber;
        if (recepientNumber.startsWith(prefix) == true) {
            correctedRecepientNumber = recepientNumber.replace(new RegExp("^" + prefix), '+');
        }
        try {
            yield client.messages.create({
                body: messageBody,
                to: correctedRecepientNumber,
                from: CONFIG.SMS_SENDER.PHONE_NUMBER.trim()
            }).then((message) => console.log(message.sid), (reason) => {
                throw {
                    status: constants_1.HTTPCode.InternalError,
                    message: "Internal error"
                };
            });
        }
        catch (error) {
            throw {
                status: constants_1.HTTPCode.InternalError,
                message: "Internal error"
            };
        }
    });
}
exports.sendOOBSecret = sendOOBSecret;
//# sourceMappingURL=smsController.js.map