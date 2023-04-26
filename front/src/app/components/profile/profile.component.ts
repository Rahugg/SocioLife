import {Component} from '@angular/core';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  posts: Post[] = []
  showOptions = false;
  private router: any;

  constructor() {
    this.posts = [
      new Post("itashi", "The best anime Lorem ipsum  tincidunt.",
        "./assets/anime-3.webp", "Do you have a favorite voice actor?"),
      new Post("kugo", "The best anime Lorem ipsum dolor sit amet,ibus erat. St, ac r neque tempus malesuada. Curabitur sednt.",
        "./assets/anime-1.webp", ""),
      new Post("naruto", "The best animeeeeee", "./assets/anime-1.webp", "")
    ]
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

  Logout() {
    window.location.href = 'signin';
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
