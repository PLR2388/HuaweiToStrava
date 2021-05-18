import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';


import {ConnectStravaComponent} from './connect-strava/connect-strava.component';
import {StravaService} from './services/strava.service';
import {environment} from '../environments/environment';
import {RouterModule, Routes} from '@angular/router';
import {ReceiveTokenStravaComponent} from './receive-token-strava/receive-token-strava.component';

const appRoutes: Routes = [
    {path: 'strava', component: ReceiveTokenStravaComponent},
    {path: '', component: ConnectStravaComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ConnectStravaComponent,
        ReceiveTokenStravaComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: [
        StravaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
