import {Component, OnInit} from '@angular/core';
import User from "../models/user.model";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    currentUser: User = new User();

    constructor() {
    }

    ngOnInit(): void {
    }

    setUserId(userId: string) {
        this.currentUser.userId = userId;
    }

    setStravaRefreshToken($event: string) {
        this.currentUser.stravaRefreshToken = $event;
    }
}
