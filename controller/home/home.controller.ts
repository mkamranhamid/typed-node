/// <reference path="../../typings/tsd.d.ts" />

import * as express from "express";

    /*export = (() => {
        
        let router = express.Router();
              
        router.get('/things', (req, res) => {
            res.json({success: true});
        });
        
        return router;
    })();*/

export let getter = ((req, res, next)=>{
    res.json('this is home');
})

