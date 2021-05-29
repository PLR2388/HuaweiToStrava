import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StravaService} from '../services/strava.service';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
    selector: 'app-connect-strava',
    templateUrl: './connect-strava.component.html',
    styleUrls: ['./connect-strava.component.scss']
})
export class ConnectStravaComponent implements OnInit {

    stravaURLConnection = '';
    private code$: Observable<string | null> | undefined;

    @Output()
    connectionToStrava: EventEmitter<string> = new EventEmitter<string>();

    constructor(private route: ActivatedRoute, private stravaService: StravaService) {
    }

    ngOnInit(): void {
        this.stravaURLConnection = this.stravaService.urlConnection;
        this.code$ = this.route.queryParamMap.pipe(
            map((params: ParamMap) => params.get('code'))
        );
        this.code$.subscribe(param => {
            const observer = this.stravaService.getToken(param);
            if (observer !== undefined) {
                observer.subscribe(token => {
                    const refreshToken = token.refresh_token;
                    console.log(refreshToken);
                    console.log('Connect Strava receive ' + refreshToken + ' from successStrava');
                    this.connectionToStrava.emit(refreshToken);
                });
            }
        });
    }
}
