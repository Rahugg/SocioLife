import { Component } from '@angular/core';
import {Post} from "../../models/Post";
import {User} from "../../models/User";
import {AppComponent} from "../../app.component";

interface MenuButton{
  name : string,
  isActive : boolean,
  activeIcon :  string
  inactiveIcon : string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'SocioLife';

  users : User[] = []
  menuButtons : MenuButton[] = []
  newPost : Post
  searchingList : User[] = []
  questionLength : number = 0

  constructor(public app : AppComponent) {
    this.users = app.users
    this.newPost = {} as Post
    this.menuButtons = [
      {name : "Home", isActive : true, activeIcon :  "./assets/icons/icon-home-active.png", inactiveIcon :  "./assets/icons/icon-home-inactive.png"},
      {name : "Search", isActive : false, activeIcon :  "./assets/icons/icon-search-active.png", inactiveIcon :  "./assets/icons/icon-search-inactive.png"},
      {name : "Create", isActive : false, activeIcon : "./assets/icons/icon-add-active.png", inactiveIcon :  "./assets/icons/icon-add-inactive.png"}
    ]
  }

  chooseMenu(event : any, index : number) {
    this.menuButtons.forEach(button => button.isActive = false)
    var currentMenuButton = this.menuButtons[index]
    currentMenuButton.isActive = true
    if (currentMenuButton.name == "Create") {
      if (event.composedPath()[0].classList[0] == "modal-background"
        || event.composedPath()[0].classList[0] == "menu-button"
        || event.composedPath()[1].classList[0] == "menu-button") {
        var createPostElement = document.getElementById("modal-background-create-post")
        if (createPostElement)
          createPostElement.classList.add("modal-active")
        this.newPost.title = ""
        this.newPost.img = ""
      }
    } else if (currentMenuButton.name == "Search") {
      if (event.composedPath()[0].classList[0] == "modal-background"
        || event.composedPath()[0].classList[0] == "menu-button"
        || event.composedPath()[1].classList[0] == "menu-button") {
        var searchElement = document.getElementById("modal-background-search")
        if (searchElement)
          searchElement.classList.add("modal-active")
      }
    }
  }

  closeModel(event : any){
    event.composedPath()[0].classList.remove("modal-active")
    this.menuButtons.forEach(button => button.isActive = false)
    this.menuButtons[0].isActive = true
  }

  createNewPost(value : any, $event : any){

    this.newPost.title = value.title
    this.newPost.question = value.question
    //logic to add new post

    // @ts-ignore
    document.getElementById("modal-background-create-post").classList.toggle("modal-active")
    // @ts-ignore
    document.getElementById("modal-background-create-post").children[0].classList.toggle("modal-active")
    this.newPost.title = ""
    this.newPost.img = ""
  }

  uploadPhoto($event : any){
    var reader = new FileReader();
    reader.readAsDataURL($event?.target.files[0]);

    // @ts-ignore
    reader.onload = (event: any) => {
      this.newPost.img = event.target.result
    }
    this.newPost.img = $event?.target.files[0]
    console.log($event?.target.files[0])
  }

  handleSearch(value : any){
    this.searchingList = this.users.filter(user => user.username.includes(value))
  }

  handlePostQuestion(value : any){
    console.log(this.questionLength)
    console.log(value.question.length)
    this.questionLength = value.question.length
  }

}
