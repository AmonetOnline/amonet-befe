"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPCode;
(function (HTTPCode) {
    HTTPCode[HTTPCode["Continue"] = 100] = "Continue";
    HTTPCode[HTTPCode["Success"] = 200] = "Success";
    HTTPCode[HTTPCode["Created"] = 201] = "Created";
    HTTPCode[HTTPCode["Updated"] = 202] = "Updated";
    HTTPCode[HTTPCode["BadRequest"] = 400] = "BadRequest";
    HTTPCode[HTTPCode["Unauthorized"] = 401] = "Unauthorized";
    HTTPCode[HTTPCode["Forbidden"] = 403] = "Forbidden";
    HTTPCode[HTTPCode["NotFound"] = 404] = "NotFound";
    HTTPCode[HTTPCode["NotAcceptable"] = 406] = "NotAcceptable";
    HTTPCode[HTTPCode["InternalError"] = 500] = "InternalError";
})(HTTPCode = exports.HTTPCode || (exports.HTTPCode = {}));
var APIConstants;
(function (APIConstants) {
    APIConstants["base_url"] = "https://amonet.co.za";
    APIConstants["consumer_key"] = "ck_2ccfbf71d7af180715a487f97bdb02f1823c9a4b";
    APIConstants["consumer_secret"] = "cs_bccc663c069f916f7d06f83b04a9bf110dfcbae4";
})(APIConstants = exports.APIConstants || (exports.APIConstants = {}));
exports.aes128_encryptionKey = [91, 7, 119, 71, 3, 67, 79, 13, 109, 101, 97, 13, 29, 19, 91, 7];
exports.aes192_encryptionKey = [67, 1, 2, 29, 4, 13, 71, 7, 8, 13, 67, 67, 67, 13, 14, 101,
    101, 17, 71, 29, 19, 29, 19, 19];
exports.aes256_encryptionKey = [67, 29, 119, 3, 101, 5, 71, 109, 8, 97, 29, 67, 29, 13, 14, 101, 71, 17, 119, 19, 29, 13, 149, 119, 24, 67, 29, 27, 119,
    29, 71, 31];
exports.SMS_CAPABLE_PHONE_NUMBER = "";
var HTTPHeaderKey;
(function (HTTPHeaderKey) {
    HTTPHeaderKey["Authenticate"] = "ww-authenticate";
    HTTPHeaderKey["AccountLocked"] = "account-locked";
})(HTTPHeaderKey = exports.HTTPHeaderKey || (exports.HTTPHeaderKey = {}));
var HTTPHeaderValue;
(function (HTTPHeaderValue) {
    HTTPHeaderValue["Oob"] = "out-of-band";
})(HTTPHeaderValue = exports.HTTPHeaderValue || (exports.HTTPHeaderValue = {}));
var HTTPBodyKey;
(function (HTTPBodyKey) {
    HTTPBodyKey["SessionID"] = "sessionId";
    HTTPBodyKey["UniqueID"] = "uniqueId";
})(HTTPBodyKey = exports.HTTPBodyKey || (exports.HTTPBodyKey = {}));
exports.ALLOWED_INCORRECT_CREDENTIALS = 5;
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["BadCredentials"] = 0] = "BadCredentials";
    ErrorType[ErrorType["AccountLocked"] = 1] = "AccountLocked";
    ErrorType[ErrorType["FailedConnection"] = 2] = "FailedConnection";
    ErrorType[ErrorType["InternalError"] = 3] = "InternalError";
    ErrorType[ErrorType["LastAttempt"] = 4] = "LastAttempt";
    ErrorType[ErrorType["InvalidFormData"] = 5] = "InvalidFormData";
    ErrorType[ErrorType["Unauthorized"] = 6] = "Unauthorized";
    ErrorType[ErrorType["NotFound"] = 7] = "NotFound";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
//# sourceMappingURL=index.js.map