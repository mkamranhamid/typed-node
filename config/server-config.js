/// <reference path="../typings/tsd.d.ts" />
function serverConfig() {
    console.log('server is running');
    return {
        APP_PORT: process.env.APP_PORT || 3000
    };
}
exports.serverConfig = serverConfig;
