import {Component} from '@angular/core';
import {CommentSliderIndex, Post} from '../../models/Post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  posts: Post[] = []
  commentIndexes: CommentSliderIndex[] = []
  showOptions = false;
  constructor() {
    this.posts = [
      new Post("naruto", "The best anime Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacinia magna. Praesent sed tempus nulla, ac faucibus erat. Sed iaculis purus id nisl placerat, ac tincidunt orci scelerisque. Quisque hendrerit enim ut ex vulputate, ac convallis magna iaculis. Suspendisse lacus leo, iaculis ac lobortis sed, lacinia in lorem. Pellentesque scelerisque odio ligula, a porttitor neque tempus malesuada. Curabitur sed tincidunt sem. Sed nec nulla nec nunc pretium tincidunt.",
        "./assets/anime-3.webp"),
      new Post("naruto", "The best anime Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacinia magna. Praesent sed tempus nulla, ac faucibus erat. Sed iaculis purus id nisl placerat, ac tincidunt orci scelerisque. Quisque hendrerit enim ut ex vulputate, ac convallis magna iaculis. Suspendisse lacus leo, iaculis ac lobortis sed, lacinia in lorem. Pellentesque scelerisque odio ligula, a porttitor neque tempus malesuada. Curabitur sed tincidunt sem. Sed nec nulla nec nunc pretium tincidunt.",
        "./assets/anime-1.webp"),
      new Post("itashi", "The best animeeeeee", "./assets/anime-1.webp")
    ]

    for (let i = 0; i < this.posts.length; i++) {
      this.commentIndexes.push({currentIndex: 0, length: this.posts[i].comments.length});
    }
  }

  openModalChangePassword(event: any) {
    if (event.composedPath()[0].classList[0] == "modal-background"
      || event.composedPath()[0].classList[0] == "change-password-option"
      || event.composedPath()[1].classList[0] == "change-password-option") {
      // @ts-ignore
      document.getElementById("modal-background-change-password").classList.toggle("modal-active")
      // @ts-ignore
      document.getElementById("modal-background-change-password").children[0].classList.toggle("modal-active")

    }
  }

  openModalEditProfile(event: any) {
    if (event.composedPath()[0].classList[0] == "modal-background"
      || event.composedPath()[0].classList[0] == "profile-icon"
      || event.composedPath()[1].classList[0] == "profile-icon") {
      // @ts-ignore
      document.getElementById("modal-background-edit-profile").classList.toggle("modal-active")
      // @ts-ignore
      document.getElementById("modal-background-edit-profile").children[0].classList.toggle("modal-active")

    }
  }

  toggleDropdown() {
    this.showOptions = !this.showOptions;
  }

  showMoreText(event: any) {
    if (event.composedPath()[0].classList[0] == "more-button") {
      event.composedPath()[0].style.display = "none"
      event.composedPath()[1].style.display = "none"
      event.composedPath()[2].children[1].style.display = "block"

    } else {
      event.composedPath()[1].children[0].style.display = "block"
      event.composedPath()[1].children[1].style.display = "none"
      event.composedPath()[1].children[0].children[0].style.display = ""
    }
  }

  async commentScroll() {
    var postListElement: any
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

  likeThisPost(event: any, currentPost: Post) {
    if (!currentPost.liked) {
      currentPost.likes++
      event.composedPath()[0].src = "./assets/icons/icon-like-active.png"
      currentPost.liked = true
    } else {
      currentPost.likes--
      event.composedPath()[0].src = "./assets/icons/icon-like-inactive.png"
      currentPost.liked = false
    }
  }

  changePassword(value: any, $event: any) {
  }

}
