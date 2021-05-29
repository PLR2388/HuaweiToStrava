import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isSignedIn = false;
    isRegistered = true;

    @Output()
    signInSuccess: EventEmitter<string> = new EventEmitter<string>();

    constructor(public firebaseService: FirebaseService) {
    }

    ngOnInit(): void {
        this.isSignedIn = this.firebaseService.isLoggedIn;
    }

    async onSignup(email: string, password: string) {
        await this.firebaseService.signUp(email, password);
        if (this.firebaseService.isLoggedIn) {
            this.isSignedIn = true;
            this.signInSuccess.emit(this.firebaseService.userId);
        }
    }

    async onSignin(email: string, password: string) {
        await this.firebaseService.signIn(email, password);
        if (this.firebaseService.isLoggedIn) {
            this.isSignedIn = true;
            this.signInSuccess.emit(this.firebaseService.userId);
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
