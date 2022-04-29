
import * as express from "express";
import * as highlightController from  '../controller';
import { APIConstants } from  '../../../constants';

var WooCommerceAPI = require('woocommerce-api');

var wooCommerceeClient = new WooCommerceAPI({
  url: APIConstants.base_url,
  consumerKey: APIConstants.consumer_key,
  consumerSecret: APIConstants.consumer_secret,
  wpAPI: true,
  version: 'wc/v1'
});

const router = express.Router();
router.get("/v1/highlighted-products", highlightController.highlightedProducts);
export = router;