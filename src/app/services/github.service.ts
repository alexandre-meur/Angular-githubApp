import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {GithubUser} from '../model/GithubUser';
import {GITHUB_API_URL, MESSAGE_ERREUR} from '../app.constantes';
import {PATH_DETAIL} from '../app-routes.constantes';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private userSubject = new BehaviorSubject<GithubUser>({
    login: '',
    type: '',
    company: null,
    bio: null,
    avatar_url: null,
    followers_url: '',
    repos_url: '',
  });

  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  // Met à jour le user et notifie les subscribers
  getUser(userLogin: string) {

    this.http.get(GITHUB_API_URL + userLogin)
      .subscribe({
        // On passe le résultat au service et on redirige. Le message d'erreur
        // est aussi mis à undefined.
        next: (user: GithubUser) => {
          console.log(user);
          const {login, type, company, bio, avatar_url, followers_url, repos_url}: GithubUser = user;
          this.userSubject.next({login, type, company, bio, avatar_url, followers_url, repos_url});
        },
        // En cas d'erreur, on affiche le message d'erreur
        error: e => {
          console.log(e);
        }
      });

  }


}
