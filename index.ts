import app from './app';
import * as CONFIG from './modules/config';
const express = require('express');

app.set('port', (process.env.PORT || CONFIG.SERVER.PORT));

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});