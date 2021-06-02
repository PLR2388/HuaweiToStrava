import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {StravaService} from '../services/strava.service';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import User from "../models/user.model";

@Component({
    selector: 'app-connect-strava',
    templateUrl: './connect-strava.component.html',
    styleUrls: ['./connect-strava.component.scss']
})
export class ConnectStravaComponent implements OnInit, OnChanges {

    stravaURLConnection = '';

    @Input()
    userId = '';

    @Output()
    connectionToStrava: EventEmitter<string> = new EventEmitter<string>();

    constructor(private stravaService: StravaService) {
    }

    ngOnInit(): void {
        this.stravaURLConnection = this.stravaService.getUrlConnection(this.userId);
    }

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes.userId;
        this.stravaURLConnection = this.stravaService.getUrlConnection(change.currentValue);
    }
}
