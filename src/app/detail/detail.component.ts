import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { GithubUser } from '../model/GithubUser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    user:GithubUser = {login: '', type: '', company: null, bio: null, avatar_url: null};

    constructor(private githubService:GithubService) { }

    ngOnInit() {
        //Subscribe to the observable given by the service
        this.githubService.getUserObs().subscribe({
            next: (u:GithubUser) => {
                this.user = u;
                console.log(this.user);
            },
            error: e => console.log(e),
        });
    }

}
