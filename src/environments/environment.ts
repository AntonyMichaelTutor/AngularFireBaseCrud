// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyC1wSl8tYP5SaOGsbyEX4nezd-LGSIFJkw",
    authDomain: "angular2db-98be0.firebaseapp.com",
    databaseURL: "https://angular2db-98be0.firebaseio.com",
    projectId: "angular2db-98be0",
    storageBucket: "angular2db-98be0.appspot.com",
    messagingSenderId: "160187926252"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * 
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
