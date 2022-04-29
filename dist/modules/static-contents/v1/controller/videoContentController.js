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
const index_1 = require("../../../constants/index");
const pathProvider_1 = require("../resources/pathProvider");
var fs = require('fs');
class VideoContentController {
    constructor() { }
    loadVideo(videoName, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fileName = pathProvider_1.videoDirectory() + videoName + '.mp4';
                console.log(fileName);
                response.status(200).sendFile(fileName);
            }
            catch (error) {
                response.status(index_1.HTTPCode.NotFound).json("Video not found");
            }
        });
    }
}
exports.VideoContentController = VideoContentController;
//# sourceMappingURL=videoContentController.js.map