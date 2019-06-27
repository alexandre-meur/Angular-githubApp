import {Routes} from "@angular/router";
import {PATH_DETAIL, PATH_DETAIL_FOLLOWERS, PATH_DETAIL_REPOS, PATH_HOME} from "./app-routes.constantes";
import {AppComponent} from "./app.component";
import {DetailComponent} from "./detail/detail.component";
import {ReposComponent} from "./repos/repos.component";
import {FollowersComponent} from "./followers/followers.component";
import {HomeComponent} from "./home/home.component";


export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: PATH_HOME,
  },
  {
    path: PATH_HOME,
    component: HomeComponent
  },
  {
    path: PATH_DETAIL + '/:login',
    component: DetailComponent,
    children: [
      {
        path: PATH_DETAIL_REPOS,
        component: ReposComponent
      },
      {
        path: PATH_DETAIL_FOLLOWERS,
        component: FollowersComponent
      },
    ]
  },
];
