/// <reference path="typings/tsd.d.ts" />

import * as express from "express";
let router = express.Router();
let thing = require('./controller/thing.controller');
let home = require('./controller/home/home.controller');
//let signup = require('./controller/signup/signup.controller');
//let uploadPhoto = require('./controller/uploadPhoto/upload.controller');


    console.log('routes is running');

    // things ressources
    router.get('/things', thing.getter);

    // signup ressources
    //router.post('/signup', signup.createUser);


    // uploadPhoto ressources
    //router.post('/uploadPhoto', uploadPhoto.uploadImg);
    
    // home ressources
    router.get('/', home.getter);


 export = router;
