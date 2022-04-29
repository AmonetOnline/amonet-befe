"use strict";
const express = require("express");
const staticContentController = require("../controller");
const staticContentRouter = express.Router();
staticContentRouter.get("/v1/video/:videoName/", staticContentController.loadVideo);
staticContentRouter.post("/v1/html/:contentName/", staticContentController.postHtlm);
staticContentRouter.get("/v1/html/:contentName/", staticContentController.getHtlm);
staticContentRouter.get("/v1/image/:imageName/", staticContentController.loadImage);
module.exports = staticContentRouter;
//# sourceMappingURL=index.js.map