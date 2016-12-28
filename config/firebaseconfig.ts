/// <reference path="../typings/tsd.d.ts" />

export function firebaseinit(admin,service){
    console.log('firebaseinit is running');
    

admin.initializeApp({
  credential: admin.credential.cert(service),
  databaseURL: "your-firebase-db-name.firebaseio.com"
});
}