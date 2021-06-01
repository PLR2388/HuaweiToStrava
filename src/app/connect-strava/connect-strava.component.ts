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

    @Output()
    connectionToStrava: EventEmitter<string> = new EventEmitter<string>();

    constructor(private stravaService: StravaService) {
    }

    ngOnInit(): void {
        this.stravaURLConnection = this.stravaService.urlConnection;
    }
}
