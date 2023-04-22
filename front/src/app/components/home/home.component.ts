import {Component, OnInit} from '@angular/core';
import {CommentSliderIndex, Post} from "../modules/Post"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  posts : Post[] = []
  commentIndexes : CommentSliderIndex[] = []
  currentCommentIndex = 0

  constructor() {
    this.posts = [
      new Post("naruto", "The best anime Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacinia magna. Praesent sed tempus nulla, ac faucibus erat. Sed iaculis purus id nisl placerat, ac tincidunt orci scelerisque. Quisque hendrerit enim ut ex vulputate, ac convallis magna iaculis. Suspendisse lacus leo, iaculis ac lobortis sed, lacinia in lorem. Pellentesque scelerisque odio ligula, a porttitor neque tempus malesuada. Curabitur sed tincidunt sem. Sed nec nulla nec nunc pretium tincidunt.",
        "./assets/anime-3.webp"),
      new Post("naruto", "The best anime Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacinia magna. Praesent sed tempus nulla, ac faucibus erat. Sed iaculis purus id nisl placerat, ac tincidunt orci scelerisque. Quisque hendrerit enim ut ex vulputate, ac convallis magna iaculis. Suspendisse lacus leo, iaculis ac lobortis sed, lacinia in lorem. Pellentesque scelerisque odio ligula, a porttitor neque tempus malesuada. Curabitur sed tincidunt sem. Sed nec nulla nec nunc pretium tincidunt.",
        "./assets/anime-1.webp"),
      new Post("itashi", "The best animeeeeee", "./assets/anime-1.webp")
    ]

    for (let i = 0; i < this.posts.length; i++) {
      this.commentIndexes.push({ currentIndex : 0, length : this.posts[i].comments.length});
    }
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

  commentSlider(commentsLength : number, index : number){
    setInterval(() => {
      this.commentIndexes[index].currentIndex === (this.commentIndexes[index].length-1) ? this.commentIndexes[index].currentIndex = 0: this.commentIndexes[index].currentIndex++;
    }, 6000);
  }


  scrollComment2(currentCommentList : any, i : number){
    currentCommentList.scroll({
      top: i * 50,
      left: 0,
      behavior: 'smooth',
    });
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


  ngOnInit(): void {
    // for (let i = 0; i < this.posts.length; i++) {
    //   this.commentScroll(this.posts[i].comments.length, i)
    // }

    this.posts[0].comments.push(
      {title : "Cool!", user : "itashi", userImage : "./assets/anime-3.webp", id : 7},
      {title : "Cool! Cool! Cool!", user : "itashi", userImage : "./assets/anime-3.webp", id : 7},
      {title : "Cool! Cool! Cool! Cool! Cool!", user : "itashi", userImage : "./assets/anime-3.webp", id : 7},
      {title : "Cool! Cool! Cool! Cool! Cool!", user : "itashi", userImage : "./assets/anime-3.webp", id : 7},
      {title : "Cool! Cool! Cool! Cool! Cool!", user : "itashi", userImage : "./assets/anime-3.webp", id : 7},
      {title : "Cool! Cool! Cool! Cool! Cool!", user : "itashi", userImage : "./assets/anime-3.webp", id : 7},
      {title : "Cool! Cool! Cool! Cool! Cool!", user : "itashi", userImage : "./assets/anime-3.webp", id : 7})


    this.posts[1].comments.push(
      {title : "Cool!", user : "itashi", userImage : "./assets/anime-3.webp", id : 7},
      {title : "Cool! Cool! Cool!", user : "itashi", userImage : "./assets/anime-3.webp", id : 7},
      {title : "Cool! Cool! Cool! Cool! Cool!", user : "itashi", userImage : "./assets/anime-3.webp", id : 7})

    this.commentScroll()
  }

  private scrollToBottom() {

  }
}
