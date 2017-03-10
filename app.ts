/// <reference path="typings/tsd.d.ts" />

import { firebaseinit } from './config/firebaseconfig';
import { serverConfig } from './config/server-config';

var admin = require("firebase-admin");
var router =  require('./routes');
import * as routerConfig  from './routes';
import express = require('express');
import bodyparser = require('body-parser');
import path = require('path');

//Data parser and static path
let app = express();

let usage = serverConfig()

// let staticFilesPath = path.resolve(__dirname, "static");
// app.use(express.static(staticFilesPath));

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.resolve(__dirname, '../static')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
//firebase initialization
// firebaseinit(admin, firebaseAccountService)


// Bootstrap routes
//  app.use('/api', routerConfig);
// app.use(routerConfig);
//Routes
app.get('/', (req, res) => {
    res.render('./static/index.html');
});

//App listener 
app.listen(usage.APP_PORT, () => {
    console.log('app is listening on port 3000')
})
