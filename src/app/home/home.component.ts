import {Component, OnInit} from '@angular/core';
import User from '../models/user.model';
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    currentUser: User = new User();

    currentIndex = 0;
    route: Router;

    constructor(route: Router) {
        this.route = route;
    }

    ngOnInit(): void {
        const data = history.state.data;
        if (data !== undefined) {
            if (data.refreshToken != null) {
                this.setStravaRefreshToken(data.refreshToken);
            }
        }
    }

    setUserId(userId: string) {
        if (userId != null) {
            this.currentUser.userId = userId;
        }
    }

    setStravaRefreshToken(refreshToken: string) {
        if (refreshToken != null) {
            this.currentUser.stravaRefreshToken = refreshToken;
            this.currentIndex = 2;
        }

    }
}
