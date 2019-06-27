import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_DETAIL } from '../app-routes.constantes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userLogin = '';
  messageErreur = undefined;

  constructor(private router: Router) {}

  updateGithubLogin(eventChange) {
    this.userLogin = eventChange.target.value;
  }

  submitForm() {
    // Envoi de la requête
    this.router.navigate([PATH_DETAIL, this.userLogin]);

  }
}
