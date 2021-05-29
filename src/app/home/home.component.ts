import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isSignedIn = false;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('user') != null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

}
