"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
var sha512 = require('js-sha512').sha512;
var sha384 = require('js-sha512').sha384;
var sha512_256 = require('js-sha512').sha512_256;
var sha512_224 = require('js-sha512').sha512_224;
var aesjs = require('aes-js');
function aes128Encrypt(plainText) {
    var textBytes = aesjs.utils.utf8.toBytes(plainText);
    var aesCtr = new aesjs.ModeOfOperation.ctr(constants_1.aes128_encryptionKey, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
}
exports.aes128Encrypt = aes128Encrypt;
function aes192Encrypt(plainText) {
    var textBytes = aesjs.utils.utf8.toBytes(plainText);
    var aesCtr = new aesjs.ModeOfOperation.ctr(constants_1.aes192_encryptionKey, new aesjs.Counter(7));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
}
exports.aes192Encrypt = aes192Encrypt;
function aes256Encrypt(plainText) {
    var textBytes = aesjs.utils.utf8.toBytes(plainText);
    var aesCtr = new aesjs.ModeOfOperation.ctr(constants_1.aes256_encryptionKey, new aesjs.Counter(3));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
}
exports.aes256Encrypt = aes256Encrypt;
function aes128Decrypt(cipher) {
    var encryptedBytes = aesjs.utils.hex.toBytes(cipher);
    var aesCtr = new aesjs.ModeOfOperation.ctr(constants_1.aes128_encryptionKey, new aesjs.Counter(5));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText;
}
exports.aes128Decrypt = aes128Decrypt;
function aes192Decrypt(cipher) {
    var encryptedBytes = aesjs.utils.hex.toBytes(cipher);
    var aesCtr = new aesjs.ModeOfOperation.ctr(constants_1.aes192_encryptionKey, new aesjs.Counter(7));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText;
}
exports.aes192Decrypt = aes192Decrypt;
function aes256Decypt(cipher) {
    var textBytes = aesjs.utils.utf8.toBytes(cipher);
    var aesCtr = new aesjs.ModeOfOperation.ctr(constants_1.aes256_encryptionKey, new aesjs.Counter(3));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
}
exports.aes256Decypt = aes256Decypt;
function generateSha512(text) {
    return sha512(text);
}
exports.generateSha512 = generateSha512;
function generateSha384(text) {
    return sha384(text);
}
exports.generateSha384 = generateSha384;
function generateSha256(text) {
    return sha512_256(text);
}
exports.generateSha256 = generateSha256;
function generateSha224(text) {
    return sha512_224(text);
}
exports.generateSha224 = generateSha224;
function generateSha512HMAC(key, text) {
    return sha512.hmac(key, text);
}
exports.generateSha512HMAC = generateSha512HMAC;
function generateSha384HMAC(key, text) {
    return sha384.hmac(key, text);
}
exports.generateSha384HMAC = generateSha384HMAC;
function generateSha256HMAC(key, text) {
    return sha512_256.hmac(key, text);
}
exports.generateSha256HMAC = generateSha256HMAC;
function generateSha224HMAC(key, text) {
    return sha512_224.hmac(key, text);
}
exports.generateSha224HMAC = generateSha224HMAC;
//# sourceMappingURL=hashController.js.map