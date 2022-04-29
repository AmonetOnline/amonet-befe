"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorItem {
    constructor(key, field, message) {
        this.key = key; // string
        this.field = field; // string
        this.message = message; // string
    }
}
exports.ErrorItem = ErrorItem;
class CommonError {
    constructor(message, referenceNumber, errors = []) {
        this.message = message;
        this.referenceNumber = referenceNumber; // string
        this.errors = errors; // array of ErrorItem
    }
}
exports.CommonError = CommonError;
//# sourceMappingURL=error.js.map