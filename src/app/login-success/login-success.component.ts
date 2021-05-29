import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss']
})
export class LoginSuccessComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>();
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  logout() {
    this.firebaseService.logout();
    this.isLogout.emit();
  }

}
