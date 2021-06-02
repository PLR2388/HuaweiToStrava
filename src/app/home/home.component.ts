import {Component, OnInit} from '@angular/core';
import User from '../models/user.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    currentUser: User = new User();

    currentIndex = 0;

    constructor() {
    }

    ngOnInit(): void {
        const data = history.state.data;
        console.log(data);
        if (data !== undefined) {
            if (data.userId !== undefined) {
                this.setUserId(data.userId);
                if (data.stravaRefreshToken !== undefined) {
                    this.setStravaRefreshToken(data.stravaRefreshToken);
                    console.log(this.currentUser);
                }
            }
        }
    }

    setUserId(userId: string): void {
        if (userId !== undefined) {
            this.currentUser.userId = userId;
        }
    }

    setStravaRefreshToken(refreshToken: string): void {
        if (refreshToken != null) {
            this.currentUser.stravaRefreshToken = refreshToken;
            this.currentIndex = 2;
        }
    }
}
