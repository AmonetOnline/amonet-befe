import { aes128_encryptionKey, aes256_encryptionKey, aes192_encryptionKey } from '../constants'

var sha512 = require('js-sha512').sha512;
var sha384 = require('js-sha512').sha384;
var sha512_256 = require('js-sha512').sha512_256;
var sha512_224 = require('js-sha512').sha512_224;
var aesjs = require('aes-js');

export function aes128Encrypt(plainText: string): string {
    var textBytes = aesjs.utils.utf8.toBytes(plainText);
    var aesCtr = new aesjs.ModeOfOperation.ctr(aes128_encryptionKey, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
}

export function aes192Encrypt(plainText: string): string {
    var textBytes = aesjs.utils.utf8.toBytes(plainText);
    var aesCtr = new aesjs.ModeOfOperation.ctr(aes192_encryptionKey, new aesjs.Counter(7));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
}

export function aes256Encrypt(plainText: string): string {
    var textBytes = aesjs.utils.utf8.toBytes(plainText);
    var aesCtr = new aesjs.ModeOfOperation.ctr(aes256_encryptionKey, new aesjs.Counter(3));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
}

export function aes128Decrypt(cipher: string): string {
    var encryptedBytes = aesjs.utils.hex.toBytes(cipher);
    var aesCtr = new aesjs.ModeOfOperation.ctr(aes128_encryptionKey, new aesjs.Counter(5));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText;
}

export function aes192Decrypt(cipher: string): string {
    var encryptedBytes = aesjs.utils.hex.toBytes(cipher);
    var aesCtr = new aesjs.ModeOfOperation.ctr(aes192_encryptionKey, new aesjs.Counter(7));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText;
}

export function aes256Decypt(cipher: string): string {
    var textBytes = aesjs.utils.utf8.toBytes(cipher);
    var aesCtr = new aesjs.ModeOfOperation.ctr(aes256_encryptionKey, new aesjs.Counter(3));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
}
export function generateSha512(text: string) {
    return sha512(text)
}

export function generateSha384(text: string) {
    return sha384(text)
}
export function generateSha256(text: string) {
    return sha512_256(text)
}

export function generateSha224(text: string) {
    return sha512_224(text)
}

export function generateSha512HMAC(key: string, text: string) {
    return sha512.hmac(key, text);
}

export function generateSha384HMAC(key: string, text: string) {
    return sha384.hmac(key, text);
}
export function generateSha256HMAC(key: string, text: string) {
    return sha512_256.hmac(key, text);
}
export function generateSha224HMAC(key: string, text: string) {
    return sha512_224.hmac(key, text);
}