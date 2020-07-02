import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

//storage
import { IonicStorageModule } from '@ionic/storage';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

var config = {
  apiKey: "AIzaSyBPWK0jbhM5xYy8dpjWUhHUHjWNbVBMW50",
  authDomain: "chat-app-29688.firebaseapp.com",
  databaseURL: "https://chat-app-29688.firebaseio.com",
  projectId: "chat-app-29688",
  storageBucket: "chat-app-29688.appspot.com",
  messagingSenderId: "159276911901",
  appId: "1:159276911901:web:d1753ec6447823b6bee5f4",
  measurementId: "G-Q5JKZZ93PY"
};;

@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
