import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ReposComponent } from './repos/repos.component';
import { FollowersComponent } from './followers/followers.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app-routes";
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ReposComponent,
    FollowersComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
