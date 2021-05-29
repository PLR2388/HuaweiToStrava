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
import {LoginComponent} from './login/login.component';
import {FirebaseService} from './services/firebase.service';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { HomeComponent } from './home/home.component';
import { ProgressStepComponent } from './progress/progress-step/progress-step.component';
import { ProgressStepDirective } from './progress/progress-step.directive';

const appRoutes: Routes = [
    {path: 'strava', component: ReceiveTokenStravaComponent},
    {path: '', component: HomeComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ConnectStravaComponent,
        ReceiveTokenStravaComponent,
        LoginComponent,
        LoginSuccessComponent,
        HomeComponent,
        ProgressStepComponent,
        ProgressStepDirective
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
        StravaService,
        FirebaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
