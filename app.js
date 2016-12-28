/// <reference path="typings/tsd.d.ts" />
var firebaseconfig_1 = require('./config/firebaseconfig');
var server_config_1 = require('./config/server-config');
var firebaseAccountService = require("./haloose-dev-firebase-adminsdk-92nlw-56942e06b4.json");
var admin = require("firebase-admin");
var router = require('./routes');
var routerConfig = require('./routes');
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
//Data parser and static path
var app = express();
var usage = server_config_1.serverConfig();
var staticFilesPath = path.resolve(__dirname, "static");
app.use(express.static(staticFilesPath));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
//firebase initialization
firebaseconfig_1.firebaseinit(admin, firebaseAccountService);
// Bootstrap routes
app.use('/api', routerConfig);
// app.use(routerConfig);
//Routes
app.get('/', function (req, res) {
    var mainFile = path.resolve(__dirname, 'static/index.html');
    res.sendFile('static/index.html');
});
//App listener 
app.listen(usage.APP_PORT, function () {
    console.log('app is listening on port 3000');
});
