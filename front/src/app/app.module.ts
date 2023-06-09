import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {WebcamModule} from 'ngx-webcam';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {ProfileComponent} from "./components/profile/profile.component"
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HomeComponent} from "./components/home/home.component";
import {SignupComponent} from "./components/signup/signup.component";
import {SigninComponent} from "./components/signin/signin.component";
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { WebCameraComponent } from './components/webcamera/web-camera.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostListComponent } from './components/post-list/post-list.component';
import {NotificationsComponent} from "./components/notifications/notifications.component";

@NgModule({
  declarations: [
    AppComponent, ProfileComponent, HomeComponent, SignupComponent, SigninComponent, MainComponent, NotFoundComponent, ForgotPasswordComponent, WebCameraComponent, PostDetailsComponent, PostListComponent, NotificationsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        FormsModule,
      WebcamModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
