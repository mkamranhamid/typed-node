/// <reference path="../typings/tsd.d.ts" />

import * as express from "express";

export let getter = ((req, res, next)=>{
    res.json('this is find');
})

