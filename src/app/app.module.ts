import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { ConnectStravaComponent } from './connect-strava/connect-strava.component';
import { StravaService} from './services/strava.service';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ConnectStravaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [
      StravaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
