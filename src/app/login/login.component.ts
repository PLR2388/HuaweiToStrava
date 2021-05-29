import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isSignedIn = false;
    isRegistered = true;

    constructor(public firebaseService: FirebaseService) {
    }

    ngOnInit(): void {
        if (localStorage.getItem('user') != null) {
            this.isSignedIn = true;
        } else {
            this.isSignedIn = false;
        }
    }

    async onSignup(email: string, password: string) {
        await this.firebaseService.signUp(email, password);
        if (this.firebaseService.isLoggedIn) {
            this.isSignedIn = true;
        }
    }

    async onSignin(email: string, password: string) {
        await this.firebaseService.signIn(email, password);
        if (this.firebaseService.isLoggedIn) {
            this.isSignedIn = true;
        }
    }

    onShouldRegister() {
        this.isRegistered = false;
    }

    onShouldLogin() {
        this.isRegistered = true;
    }

    handleLogout() {
        this.isSignedIn = false;
    }


}
