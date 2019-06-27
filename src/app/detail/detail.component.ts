import {Component, OnInit, OnDestroy} from '@angular/core';
import {GithubService} from '../services/github.service';
import {GithubUser} from '../model/GithubUser';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  user: GithubUser = {login: '', type: '', company: null, bio: null, avatar_url: null};

  userSubscription: Subscription;
  paramSubscription: Subscription;

  constructor(private githubService: GithubService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Subscribe to the observable given by the service
    this.paramSubscription = this.route.paramMap.subscribe(
      () => {
        // TODO : Récuération du param
        this.githubService.getUser('nartawak');
      }
    );

    this.userSubscription = this.githubService.user$.subscribe({
      next: (u: GithubUser) => {
        this.user = u;
        console.log(this.user);
      },
      error: e => console.log(e),
    });
  }

  ngOnDestroy(): void {
    this.userSubscription && this.userSubscription.unsubscribe();
    this.paramSubscription && this.paramSubscription.unsubscribe();
  }

}
