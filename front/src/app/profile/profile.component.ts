import {Component} from '@angular/core';
import {Post} from '../home/home.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  posts: Post[] = []

  constructor() {
    this.posts = [
      {id: 1, user: "itsanna", title: "At Home", img: "./assets/post-2.jpg"},
      {id: 2, user: "itsanna", title: "Something else", img: './assets/post-3.jpg'}
    ]
  }
}
