import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {StravaUser} from '../models/stravaUser.model';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    private stravaUsersCollection: AngularFirestoreCollection<StravaUser>;
    stravaUsers: Observable<StravaUser[]>;

    constructor(private firestore: AngularFirestore) {
        this.stravaUsersCollection = firestore.collection<StravaUser>('strava');
        this.stravaUsers = this.stravaUsersCollection.valueChanges({idField: 'customID'});
    }

    addStravaUser(stravaId: number, refreshToken: string): void {
        // Persist a document id
        const id = this.firestore.createId();
        const item: StravaUser = {id, stravaId, refreshToken};
        this.stravaUsersCollection.doc(id).set(item);
    }


}
