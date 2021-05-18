import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {StravaService} from '../services/strava.service';
import {StravaUser} from '../models/stravaUser.model';

@Component({
    selector: 'app-receive-token-strava',
    templateUrl: './receive-token-strava.component.html',
    styleUrls: ['./receive-token-strava.component.scss']
})
export class ReceiveTokenStravaComponent implements OnInit {

    data: StravaUser = {} as StravaUser;
    code: string | null = '';

    constructor(private route: ActivatedRoute, private stravaService: StravaService) {
        this.route.queryParams.subscribe(params => {
            const code = params.code;
            console.log(code);
            if (code != null) {
                this.stravaService.getToken(code)
                    .subscribe(data => {
                            this.data = data;
                            console.log(data);
                        }
                    );
            }
        });
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            const code = params.code;
            console.log(code);
            if (code != null) {
                this.stravaService.getToken(code)
                    .subscribe(data => {
                            this.data = data;
                            console.log(data);
                        }
                    );
            }
        });
    }

}
