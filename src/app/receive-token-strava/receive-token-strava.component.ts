import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {StravaService} from '../services/strava.service';
import {StravaUser} from '../models/stravaUser.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-receive-token-strava',
    templateUrl: './receive-token-strava.component.html',
    styleUrls: ['./receive-token-strava.component.scss']
})
export class ReceiveTokenStravaComponent implements OnInit {

    data: StravaUser = {} as StravaUser;
    code: string | null = '';
    private code$: Observable<string | null> | undefined;

    constructor(private route: ActivatedRoute, private stravaService: StravaService) {
    }

    ngOnInit(): void {
        this.code$ = this.route.queryParamMap.pipe(
            map((params: ParamMap) => params.get('code'))
        );
        this.code$.subscribe(param => {
            const observer = this.stravaService.getToken(param);
            if (observer !== undefined) {
                observer.subscribe(token => {
                    console.log(token);
                });
            }
        });
    }

}
