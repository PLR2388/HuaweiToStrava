import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {CONST} from '../../constants';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {StravaUser} from '../models/stravaUser.model';

@Injectable()
export class StravaService {
    urlConnection = 'https://www.strava.com/oauth/authorize?client_id=36102&redirect_uri=https://plr2388.github.io/HuaweiToStrava/strava&response_type=code&scope=activity:write&state=';


    constructor(private httpClient: HttpClient) {
    }

    getUrlConnection(userId: string): string {
        console.log('getUrlConnection called with ' + userId);
        return this.urlConnection + userId;
    }

    getToken(code: string | null): Observable<any> | undefined {
        if (code != null) {
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
            const url = 'https://www.strava.com/oauth/token?' +
                'client_id=' + CONST.STRAVA_CLIENT_ID +
                '&client_secret=' + CONST.STRAVA_CLIENT_SECRET +
                '&code=' + code +
                '&grant_type=authorization_code'
            return this.httpClient.post(url, null, httpOptions)
                .pipe(
                    catchError(this.handleError)
                );
        } else {
            return undefined;
        }
    }

    private handleError(error: HttpErrorResponse): Observable<any> {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
            'Something bad happened; please try again later.');
    }
}
