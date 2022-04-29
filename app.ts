import * as express from "express";
import * as promBundle from "express-prom-bundle";
import * as bodyParser from "body-parser";
import * as highlightPoductsRouter from './modules/highlights/v1/router';
import * as dealsRouter from './modules/deals/v1/router';
import * as staticContentRouter from './modules/static-contents/v1/router';

import { HTTPCode } from "./modules/constants";
import { ErrorItem, CommonError } from './modules/shared/models/error';

class App {
  public app;

  constructor() {
    this.app = express();
    this.configHTTPParameters();
    this.mountRoutes();
  }

  private configHTTPParameters(): void {
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
    this.mountRoutes()
  }

  private configurePublicPaths() {
    this.app.use(express.static(__dirname + '/public'));
    this.app.use(express.static(__dirname + '/public/images'));
 }

private mountRoutes(): void {
    this.app.use('/highlights', highlightPoductsRouter);
    this.app.use('/deals', dealsRouter);
    this.app.use('/public/images', staticContentRouter);
    this.app.use('/static-contents', staticContentRouter);

    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      const err = {
        message: 'Not Found',
        status: HTTPCode.NotFound
      };
      next(err);
    });
    this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
       console.log("Error")
       res.status(err.status || HTTPCode.InternalError).json(new CommonError(err.message, null, []));
    });
  }
}

const expressAppInstance = new App().app
export default expressAppInstance;