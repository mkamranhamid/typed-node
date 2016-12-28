/// <reference path="../typings/tsd.d.ts" />

export function serverConfig() {
    console.log('server is running');

    return {
        APP_PORT: process.env.APP_PORT || 3000
    }
}