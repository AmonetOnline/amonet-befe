"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeEmpty(obj) {
    Object.keys(obj).forEach(function (key) {
        (obj[key] && typeof obj[key] === 'object') && removeEmpty(obj[key]) ||
            (obj[key] === '' || obj[key] === null) && delete obj[key];
    });
    return obj;
}
exports.removeEmpty = removeEmpty;
;
//# sourceMappingURL=objectController.js.map