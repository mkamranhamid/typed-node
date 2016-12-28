/// <reference path="../../typings/tsd.d.ts" />
/*export = (() => {
    
    let router = express.Router();
          
    router.get('/things', (req, res) => {
        res.json({success: true});
    });
    
    return router;
})();*/
exports.getter = (function (req, res, next) {
    res.json('this is home');
});
