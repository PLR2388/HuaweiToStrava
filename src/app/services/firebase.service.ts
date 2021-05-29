import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import User from '../models/user.model';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    isLoggedIn = false;
    userId: string | undefined;


    private dbPath = '/User';

    usersRef: AngularFirestoreCollection<User>;

    constructor(private db: AngularFirestore, public firebaseAuth: AngularFireAuth) {
        this.usersRef = db.collection(this.dbPath);
    }

    async signIn(email: string, password: string) {
        await this.firebaseAuth.signInWithEmailAndPassword(email, password)
            .then(res => {
                this.isLoggedIn = true;
                this.userId = res.user?.uid;
            });
    }

    async signUp(email: string, password: string) {
        await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                this.isLoggedIn = true;
                this.userId = res.user?.uid;
            });
    }

    logout() {
        this.firebaseAuth.signOut();
        localStorage.removeItem('user');
    }

    getAll(): AngularFirestoreCollection<User> {
        return this.usersRef;
    }

    create(user: User): any {
        return this.usersRef.add({...user});
    }

    update(id: string, data: any): Promise<void> {
        return this.usersRef.doc(id).update(data);
    }

    delete(id: string): Promise<void> {
        return this.usersRef.doc(id).delete();
    }

}
