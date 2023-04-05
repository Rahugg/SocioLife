import { Component } from '@angular/core';

export interface Post{
  id: number
  user: String,
  title: String,
  img: String,

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts : Post[] = []

  constructor() {
    this.posts = [
      {id : 1, user: "aknurkappar", title : "At university", img: "./assets/post-1.JPG"}
    ]
  }
}
