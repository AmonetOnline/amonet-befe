"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
function encodeFileIntoBase64(file) {
    var bitmap = fs.readFileSync(file);
    return Buffer.from(bitmap).toString('base64');
}
exports.encodeFileIntoBase64 = encodeFileIntoBase64;
// function to create file from base64 encoded string
function decobeBaseImageFromBase64String(base64str, file) {
    var bitmap = new Buffer(base64str, 'base64');
    fs.writeFileSync(file, bitmap);
    console.log('******** File created from base64 encoded string ********');
}
exports.decobeBaseImageFromBase64String = decobeBaseImageFromBase64String;
//# sourceMappingURL=index.js.map