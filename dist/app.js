"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const promBundle = require("express-prom-bundle");
const bodyParser = require("body-parser");
const highlightPoductsRouter = require("./modules/highlights/v1/router");
const dealsRouter = require("./modules/deals/v1/router");
const staticContentRouter = require("./modules/static-contents/v1/router");
const constants_1 = require("./modules/constants");
const error_1 = require("./modules/shared/models/error");
class App {
    constructor() {
        this.app = express();
        this.configHTTPParameters();
        this.mountRoutes();
    }
    configHTTPParameters() {
        this.app.use(promBundle({
            includeMethod: true,
            includePath: true,
            promClient: {
                collectDefaultMetrics: {
                    timeout: 5000
                }
            }
        }));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.configurePublicPaths();
        this.mountRoutes();
    }
    configurePublicPaths() {
        this.app.use(express.static(__dirname + '/public'));
        this.app.use(express.static(__dirname + '/public/images'));
    }
    mountRoutes() {
        this.app.use('/highlights', highlightPoductsRouter);
        this.app.use('/deals', dealsRouter);
        this.app.use('/public/images', staticContentRouter);
        this.app.use('/static-contents', staticContentRouter);
        this.app.use((req, res, next) => {
            const err = {
                message: 'Not Found',
                status: constants_1.HTTPCode.NotFound
            };
            next(err);
        });
        this.app.use((err, req, res, next) => {
            console.log("Error");
            res.status(err.status || constants_1.HTTPCode.InternalError).json(new error_1.CommonError(err.message, null, []));
        });
    }
}
const expressAppInstance = new App().app;
exports.default = expressAppInstance;
//# sourceMappingURL=app.js.map