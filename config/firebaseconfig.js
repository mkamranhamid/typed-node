/// <reference path="../typings/tsd.d.ts" />
function firebaseinit(admin, service) {
    console.log('firebaseinit is running');
    admin.initializeApp({
        credential: admin.credential.cert(service),
        databaseURL: "https://haloose-dev.firebaseio.com"
    });
}
exports.firebaseinit = firebaseinit;
