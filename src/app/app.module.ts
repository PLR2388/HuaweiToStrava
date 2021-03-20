import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConnectStravaComponent } from './connect-strava/connect-strava.component';
import { StravaService} from './services/strava.service';

@NgModule({
  declarations: [
    AppComponent,
    ConnectStravaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [
      StravaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
