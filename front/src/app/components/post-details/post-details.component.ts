import {Component, OnInit} from '@angular/core';
import {MainComponent} from "../main/main.component";
import {PostListComponent} from "../post-list/post-list.component";
import {Comment, Post} from "../../models/Post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{
  currentPost : Post = new Post("kugo", "The best anime Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacinia magna. Praesent sed tempus nulla, ac faucibus erat. Sed iaculis purus id nisl placerat, ac tincidunt orci scelerisque. Quisque hendrerit enim ut ex vulputate, ac convallis magna iaculis. Suspendisse lacus leo, iaculis ac lobortis sed, lacinia in lorem. Pellentesque scelerisque odio ligula, a porttitor neque tempus malesuada. Curabitur sed tincidunt sem. Sed nec nulla nec nunc pretium tincidunt.",
    "./assets/anime-1.webp", "")
  itIsHomePage : boolean
  constructor() {
    this.itIsHomePage = window.location.pathname.includes("home")
    this.currentPost.comments.push(
      new Comment("itashi", "Cool"),
      new Comment("itashi", "Cool! Cool! Cool!"),
      new Comment("itashi", "Cool! Cool! Cool! Cool! Cool!"),
      new Comment("itashi", "Cool! Cool! Cool! Cool!"),
      new Comment("itashi", "Cool"),
      new Comment("itashi", "Cool! Cool! Cool!"),
      new Comment("itashi", "Cool! Cool! Cool! Cool! Cool!"),
      new Comment("itashi", "Cool! Cool! Cool! Cool!"),
      new Comment("itashi", "Cool"),
      new Comment("itashi", "Cool! Cool! Cool!"),
      new Comment("itashi", "Cool! Cool! Cool! Cool! Cool!"),
      new Comment("itashi", "Cool! Cool! Cool! Cool!"),
      new Comment("itashi", "Cool"),
      new Comment("itashi", "Cool! Cool! Cool!"),
      new Comment("itashi", "Cool! Cool! Cool! Cool! Cool!"),
      new Comment("itashi", "Cool! Cool! Cool! Cool!")
      )

    // @ts-ignore
    // console.log( document.getElementById("post-details").scroll)
    // @ts-ignore
    // document.getElementById("post-details").scroll({top : 0})
  }

  likeThisPost(event : any,post : Post) {
    // @ts-ignore
    // this.postListComponent.likeThisPost(event, post)
  }

  postComment(value : any, postId : number) {
    // this.postListComponent.postComment(value, postId)
  }

  ngOnInit(): void {
    var mainContainer = <HTMLElement> document.getElementById("post-details")
    mainContainer.clientTop
  }
}
