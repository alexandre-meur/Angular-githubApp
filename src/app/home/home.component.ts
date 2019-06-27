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

  constructor(private router:Router) {}

  updateGithubLogin(eventChange) {
    this.userLogin = eventChange.target.value;
  }

  submitForm() {
    // Envoi de la requête
    this.router.navigate([PATH_DETAIL, this.userLogin]);

  }
}
