import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GithubUser } from '../model/GithubUser';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

    userSubject = new Subject<GithubUser>();

    constructor() { }

    //Met à jour le user et notifie les subscribers
    updateUser(githubUser:GithubUser){
        const {login, type, company, bio, avatar_url}: GithubUser = githubUser;
        this.userSubject.next({login, type, company, bio, avatar_url});
    }

    //Gives an observable on variable user
    getUserObs(){
        return this.userSubject.asObservable();
    }


}
