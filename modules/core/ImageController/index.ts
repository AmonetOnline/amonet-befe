var fs = require('fs');


export function encodeFileIntoBase64(file: String): string {
    var bitmap = fs.readFileSync(file);
    return Buffer.from(bitmap).toString('base64');
}

// function to create file from base64 encoded string
export function decobeBaseImageFromBase64String(base64str: string, file: String) {
    var bitmap = new Buffer(base64str, 'base64');
    fs.writeFileSync(file, bitmap);
    console.log('******** File created from base64 encoded string ********');
}
