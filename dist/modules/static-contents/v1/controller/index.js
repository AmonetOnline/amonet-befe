"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htlmContentController = require("./htmlContentController");
const pathProvider_1 = require("../resources/pathProvider");
const videoContentController_1 = require("./videoContentController");
var fs = require('fs');
function postHtlm(request, response) {
    return loadHtlm(request, true, response);
}
exports.postHtlm = postHtlm;
function getHtlm(request, response) {
    return loadHtlm(request, false, response);
}
exports.getHtlm = getHtlm;
function loadImage(request, response) {
    try {
        const imageName = request.params.imageName;
        const fileName = pathProvider_1.imageDirectory() + imageName;
        var image = fs.readFileSync(fileName);
        response.writeHead(200, { 'Content-Type': 'image/gif' });
        response.end(image, 'binary');
    }
    catch (error) {
        response.status(error.statusCode || 500).json(error.body || error.message);
    }
}
exports.loadImage = loadImage;
function loadVideo(request, response) {
    const videoContentController = new videoContentController_1.VideoContentController();
    try {
        const videoName = request.params.videoName;
        return videoContentController.loadVideo(videoName, response);
    }
    catch (error) {
        response.status(error.statusCode || 500).json(error.body || error.message);
    }
}
exports.loadVideo = loadVideo;
function loadHtlm(request, isPost, response) {
    try {
        const contentName = request.params.contentName;
        const collectionQuery = request.query.collecting;
        const site = request.params.site;
        const amount = parseInt(request.query.amount);
        const ordernumber = request.query.ordernumber;
        console.log(contentName);
        if (!collectionQuery || collectionQuery == null) {
            return htlmContentController.loadHtml(contentName, isPost, response, amount, ordernumber, site);
        }
        const collecting = JSON.parse(collectionQuery);
        return htlmContentController.loadHtml(contentName, isPost, response, amount, ordernumber, site, collecting);
    }
    catch (error) {
        response.status(error.statusCode || 500).json(error.body || error.message);
    }
}
//# sourceMappingURL=index.js.map