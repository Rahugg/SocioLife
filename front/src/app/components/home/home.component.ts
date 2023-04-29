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
export class HomeComponent implements OnInit{
  posts : Post[] = []
  constructor(public mainComponent : MainComponent) {
  }


  showMoreText(event : any){
    if(event.composedPath()[0].classList[0] == "more-button") {
      event.composedPath()[0].style.display = "none"
      event.composedPath()[1].style.display = "none"
      event.composedPath()[2].children[1].style.display = "block"

    } else {
      event.composedPath()[1].children[0].style.display = "block"
      event.composedPath()[1].children[1].style.display = "none"
      event.composedPath()[1].children[0].children[0].style.display = ""
    }
  }

  async commentScroll(){
    var postListElement : any
    document.addEventListener('DOMContentLoaded', async function () {
      postListElement = document.getElementsByClassName("post")
      for (var element of postListElement) {
        var currentCommentList = element.children[0].children[0].children[1]
          await currentCommentList.scroll({
            top: currentCommentList.scrollHeight,
            left: 0,
            behavior: 'smooth',
          });
      }
    });
  }

  likeThisPost(event : any, currentPost : Post){
    if(!currentPost.liked) {
      currentPost.likes++
      event.composedPath()[0].src="./assets/icons/icon-like-active.png"
      currentPost.liked = true
    } else {
      currentPost.likes--
      event.composedPath()[0].src="./assets/icons/icon-like-inactive.png"
      currentPost.liked = false
    }
  }

  postComment(value : any, postId : number){
    var newComment = new Comment("itsanna", value.comment )
    const currentPost = this.posts.filter(post => post.id == postId)[0]
    currentPost.comments.push(newComment)
  }

  ngOnInit(): void {

    this.posts = this.mainComponent.posts

    this.posts[0].comments.push(
      new Comment("itashi", "Cool"),
      new Comment("itashi", "Cool! Cool! Cool!"),
      new Comment("itashi", "Cool! Cool! Cool! Cool! Cool!"),
      new Comment("itashi", "Cool! Cool! Cool! Cool!"))

    this.posts[1].comments.push(
      new Comment("itashi", "Cool"),
      new Comment("itashi", "Cool! Cool! Cool! Cool!"))

    this.commentScroll()

  }
}
