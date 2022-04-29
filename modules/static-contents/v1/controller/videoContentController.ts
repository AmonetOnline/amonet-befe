import { Request, Response } from 'express';
import { HTTPCode, HTTPBodyKey } from '../../../constants/index';
import { videoDirectory } from '../resources/pathProvider';

var fs = require('fs');

export class VideoContentController {
    public constructor() { }

    public async loadVideo(videoName: String, response: Response) {
        try {
            const fileName = videoDirectory() + videoName + '.mp4'
            console.log(fileName);
            response.status(200).sendFile(fileName);
        } catch (error) {
            response.status( HTTPCode.NotFound).json("Video not found");
        }
    }
}