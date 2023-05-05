import {Component, OnInit} from '@angular/core';
import {Post, Comment} from "../../models/Post"
import {AppComponent} from "../../app.component";
import {MainComponent} from "../main/main.component";
import {SigninComponent} from "../signin/signin.component";
import {User} from "../../models/User";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
}
