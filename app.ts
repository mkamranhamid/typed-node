/// <reference path="typings/tsd.d.ts" />

//import {addingUsers} from './mongoschema';

import express = require('express');
import bodyparser = require('body-parser');
import path = require('path');

//Data parser and static path
let app = express();
//addingUsers(app);

let staticFilesPath = path.resolve(__dirname, "static");
app.use(express.static(staticFilesPath));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


//Routes
app.get('/', (req, res) => {
    let mainFile = path.resolve(__dirname, 'static/index.html')
    res.sendFile('static/index.html');
});

//App listener 
app.listen(3000, () => {
    console.log('app is listening on port 3000')
})
