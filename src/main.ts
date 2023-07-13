import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// platformBrowserDynamic().bootstrapModule(AppModule) //Angular is innitialised here
//   .catch(err => console.error(err));


firebase.initializeApp(environment.firebase)

let appInit = false

firebase.auth().onAuthStateChanged(() => {
  if (!appInit) {
    platformBrowserDynamic().bootstrapModule(AppModule) //Angular is innitialised here
      .catch(err => console.error(err));
  }
  appInit = true;
})

