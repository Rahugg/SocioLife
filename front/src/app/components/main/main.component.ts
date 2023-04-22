import { Component } from '@angular/core';
import {Post} from "../../models/Post";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'SocioLife';

  newPost : Post

  constructor() {
    this.newPost = {} as Post
  }

  openModal(event : any){
    if(event.composedPath()[0].classList[0] == "modal-background"
      || event.composedPath()[0].classList[0] == "menu-button"
      || event.composedPath()[1].classList[0] == "menu-button"){
      // @ts-ignore
      document.getElementById("modal-background-create-post").classList.toggle("modal-active")
      // @ts-ignore
      document.getElementById("modal-background-create-post").children[0].classList.toggle("modal-active")

      this.newPost.title = ""
      this.newPost.img = ""
    }
  }

  createNewPost(value : any, $event : any){

    this.newPost.title = value.title
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

}
