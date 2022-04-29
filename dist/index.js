"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const CONFIG = require("./modules/config");
const express = require('express');
app_1.default.set('port', (process.env.PORT || CONFIG.SERVER.PORT));
app_1.default.listen(app_1.default.get('port'), function () {
    console.log('Node app is running on port', app_1.default.get('port'));
});
//# sourceMappingURL=index.js.map