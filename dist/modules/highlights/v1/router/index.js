"use strict";
const express = require("express");
const highlightController = require("../controller");
const constants_1 = require("../../../constants");
var WooCommerceAPI = require('woocommerce-api');
var wooCommerceeClient = new WooCommerceAPI({
    url: constants_1.APIConstants.base_url,
    consumerKey: constants_1.APIConstants.consumer_key,
    consumerSecret: constants_1.APIConstants.consumer_secret,
    wpAPI: true,
    version: 'wc/v1'
});
const router = express.Router();
router.get("/v1/highlighted-products", highlightController.highlightedProducts);
module.exports = router;
//# sourceMappingURL=index.js.map