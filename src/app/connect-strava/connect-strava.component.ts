import { Component, OnInit } from '@angular/core';
import {StravaService} from '../services/strava.service';

@Component({
  selector: 'app-connect-strava',
  templateUrl: './connect-strava.component.html',
  styleUrls: ['./connect-strava.component.scss']
})
export class ConnectStravaComponent implements OnInit {

  stravaURLConnection = '';

  constructor(private stravaService: StravaService) {
    this.stravaURLConnection = stravaService.urlConnection;
  }

  ngOnInit(): void {
  }

}
