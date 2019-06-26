import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user = '';

  constructor(private http:HttpClient) {}

  updateGithubLogin(eventChange) {
    this.user = eventChange.target.value;
  }

  submitForm() {
    const GITHUB_API_URL = 'https://api.github.com/users/';

    //Envoi de la requête
    this.http.get(GITHUB_API_URL + this.user)
      .subscribe()
  }
}
