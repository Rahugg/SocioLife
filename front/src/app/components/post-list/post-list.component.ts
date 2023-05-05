import {Component, OnInit} from '@angular/core';
import {Comment, Post} from "../../models/Post";
import {MainComponent} from "../main/main.component";

interface PostListCategory{
  name : String,
  isActive : Boolean
}
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts : Post[] = []
  postListCategories : PostListCategory[]
  currentPost : Post | undefined
  constructor(public mainComponent : MainComponent) {
    this.posts = this.mainComponent.posts
    this.postListCategories = [
      {name : "For you", isActive : true},
      {name : "Trending", isActive : false},
    ]
  }

  showMoreText(event : any, postId : number){

  }

  showMore(event : any, postId : number){
    var currentPostIndex = this.posts.indexOf(this.posts.filter(post => postId == post.id)[0])
    this.currentPost = this.posts[currentPostIndex]
  }

  async commentScroll(){
    var postListElement : any
    // document.addEventListener('DOMContentLoaded', async function () {
    //   postListElement = document.getElementsByClassName("post")
    //   for (var element of postListElement) {
    //     var currentCommentList = element.children[0].children[0].children[1]
    //       await currentCommentList.scroll({
    //         top: currentCommentList.scrollHeight,
    //         left: 0,
    //         behavior: 'smooth',
    //       });
    //   }
    // });
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
    this.commentScroll()
  }

  switchCategory(category : PostListCategory){
    this.postListCategories.forEach(category => category.isActive = false)
    const currentCategoryIndex = this.postListCategories.indexOf(category);
    this.postListCategories[currentCategoryIndex].isActive = true
  }
}

