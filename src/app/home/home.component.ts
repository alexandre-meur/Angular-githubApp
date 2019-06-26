import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GithubService } from '../services/github.service';
import { GITHUB_API_URL, MESSAGE_ERREUR } from '../app.constantes';
import { Router } from '@angular/router';
import { PATH_DETAIL } from '../app-routes.constantes';
import { GithubUser } from '../model/GithubUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userLogin = '';
  messageErreur = undefined;

  constructor(private http:HttpClient,
      private githubService:GithubService,
      private router:Router) {}

  updateGithubLogin(eventChange) {
    this.userLogin = eventChange.target.value;
  }

  submitForm() {
    //Envoi de la requête
    this.http.get(GITHUB_API_URL + this.userLogin)
      .subscribe({
          //On passe le résultat au service et on redirige. Le message d'erreur
          //est aussi mis à undefined.
          next: (user:GithubUser) => {
              this.messageErreur = undefined;
              this.githubService.updateUser(user);
              this.router.navigate([PATH_DETAIL]);
          },
          //En cas d'erreur, on affiche le message d'erreur
          error: e => {
              console.log(e);
              this.messageErreur = MESSAGE_ERREUR;
          }
      });
  }
}
