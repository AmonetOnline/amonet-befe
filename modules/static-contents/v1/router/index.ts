import * as express from 'express';
import { APIConstants } from  '../../../constants';
import * as staticContentController  from '../controller';

const staticContentRouter = express.Router();
export = staticContentRouter;

staticContentRouter.get("/v1/video/:videoName/", staticContentController.loadVideo);
staticContentRouter.post("/v1/html/:contentName/", staticContentController.postHtlm);
staticContentRouter.get("/v1/html/:contentName/", staticContentController.getHtlm);
staticContentRouter.get("/v1/image/:imageName/", staticContentController.loadImage);
