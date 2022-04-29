"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
exports.fileDirectory = __dirname + '../../../../../private/files';
exports.imageDirectory = () => {
    const fileName = path.join(exports.fileDirectory + '/image/');
    return fileName;
};
exports.videoDirectory = () => {
    const fileName = path.join(exports.fileDirectory + '/video/');
    return fileName;
};
exports.htmlDirectory = () => {
    const fileName = path.join(exports.fileDirectory + '/html/');
    return fileName;
};
//# sourceMappingURL=pathProvider.js.map