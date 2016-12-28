/// <reference path="typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
var thing = require('./controller/thing.controller');
var home = require('./controller/home/home.controller');
var signup = require('./controller/signup/signup.controller');
var uploadPhoto = require('./controller/uploadPhoto/upload.controller');
console.log('routes is running');
// things ressources
router.get('/things', thing.getter);
// signup ressources
router.post('/signup', signup.createUser);
// uploadPhoto ressources
router.post('/uploadPhoto', uploadPhoto.uploadImg);
// home ressources
router.get('/', home.getter);
module.exports = router;
