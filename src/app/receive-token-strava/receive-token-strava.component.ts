import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
    private state$: Observable<string | null> | undefined;

    @Output()
    stravaSuccess: EventEmitter<string> = new EventEmitter<string>();

    constructor(private route: ActivatedRoute, private stravaService: StravaService, private router: Router) {
    }

    ngOnInit(): void {
        this.code$ = this.route.queryParamMap.pipe(
            map((params: ParamMap) => params.get('code'))
        );
        this.state$ = this.route.queryParamMap.pipe(
            map((params: ParamMap) => params.get('state'))
        );
        this.code$.subscribe(param => {
                const observer = this.stravaService.getToken(param);
                if (observer !== undefined) {
                    observer.subscribe(token => {
                        const stravaRefreshToken = token.refresh_token;
                        this.state$?.subscribe(userId => {
                            this.router.navigate([''], {state: {data: {stravaRefreshToken, userId}}});
                        });
                    });
                }
            }
        );
    }

}
