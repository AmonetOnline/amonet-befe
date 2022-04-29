import { Request, Response } from 'express';
import { HTTPCode, HTTPBodyKey } from '../../../constants/index';
import * as htlmContentController from './htmlContentController';
import { imageDirectory, videoDirectory } from '../resources/pathProvider';
import { VideoContentController } from './videoContentController';
var fs = require('fs');

export function postHtlm(request: Request, response: Response) {
   return loadHtlm(request,true,response);
}

export function getHtlm(request: Request, response: Response) {
    return loadHtlm(request,false,response);
}

export function loadImage(request: Request, response: Response) {
    try {
        const imageName = request.params.imageName;
        const fileName = imageDirectory() + imageName;
        var image = fs.readFileSync(fileName);
        response.writeHead(200, { 'Content-Type': 'image/gif' });
        response.end(image, 'binary');
    } catch (error) {
        response.status(error.statusCode || 500).json(error.body || error.message);
    }
}

export function loadVideo(request: Request, response: Response) {
    const videoContentController = new VideoContentController();
    try {
        const videoName = request.params.videoName;
        return videoContentController.loadVideo(videoName, response);
    } catch (error) {
        response.status(error.statusCode || 500).json(error.body || error.message);
    }
}

function loadHtlm(request: Request, isPost: Boolean, response: Response) {
    
    try {
        const contentName = request.params.contentName;
        const collectionQuery = request.query.collecting;
        const site = request.params.site;
        const amount = parseInt(request.query.amount);
        const ordernumber = request.query.ordernumber;
        
        console.log(contentName);
        if (!collectionQuery || collectionQuery == null) {
            return htlmContentController.loadHtml(contentName, isPost,response,amount,ordernumber,site);
        }
        const collecting: Boolean = JSON.parse(collectionQuery);
        return htlmContentController.loadHtml(contentName, isPost,response,amount,ordernumber,site,collecting);
    } catch (error) {
        response.status(error.statusCode || 500).json(error.body || error.message);
    }
}