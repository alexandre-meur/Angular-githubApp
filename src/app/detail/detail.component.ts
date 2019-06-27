import {Component, OnInit, OnDestroy} from '@angular/core';
import {GithubService} from '../services/github.service';
import {GithubUser} from '../model/GithubUser';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {PATH_DETAIL, PATH_DETAIL_FOLLOWERS, PATH_DETAIL_REPOS} from '../app-routes.constantes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  user: GithubUser = {login: '', type: '', company: null, bio: null, avatar_url: null};

  userSubscription: Subscription;
  paramSubscription: Subscription;

  constructor(private githubService: GithubService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // Subscribe to the observable given by the service
    this.paramSubscription = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.githubService.getUser(params.get('login'));
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

  navigateToRepos() {
    this.router.navigate([PATH_DETAIL, this.user.login, PATH_DETAIL_REPOS]);
  }

  navigateToFollowers() {
    this.router.navigate([PATH_DETAIL, this.user.login, PATH_DETAIL_FOLLOWERS]);
  }
}
