import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Comment, Post} from "../../models/Post";
import {User} from "../../models/User";
import {AppComponent} from "../../app.component";
import {SigninComponent} from "../signin/signin.component";
import {WebcamImage} from "ngx-webcam";

interface MenuButton{
  name : string,
  isActive : boolean,
  activeIcon :  string
  inactiveIcon : string
  elementId : string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit{
  title = 'SocioLife';
  users : User[] = []
  posts : Post[] = []
  menuButtons : MenuButton[] = []
  currentMenuButtonName : string = "Home"
  newPost : Post
  searchingList : User[] = []
  questionLength : number = 0
  webcamIsActive = false
  webcamImage: WebcamImage | undefined

  constructor(public app : AppComponent, public changeDetectorRef : ChangeDetectorRef) {
    this.users = app.users
    this.newPost = {} as Post

    this.menuButtons = [
      {name : "Home", isActive : true, activeIcon :  "./assets/icons/icon-home-active.png", inactiveIcon :  "./assets/icons/icon-home-inactive.png", elementId: ""},
      {name : "Search", isActive : false, activeIcon :  "./assets/icons/icon-search-active.png", inactiveIcon :  "./assets/icons/icon-search-inactive.png", elementId: "modal-background-create-post"},
      {name : "Create", isActive : false, activeIcon : "./assets/icons/icon-add-active.png", inactiveIcon :  "./assets/icons/icon-add-inactive.png", elementId: "modal-background-search"},
      {name : "Notifications", isActive : false, activeIcon : "./assets/icons/icon-notifications.png", inactiveIcon :  "./assets/icons/icon-notifications-inactive.png", elementId: "notification-bar"},
    ]

    this.posts = [
      new Post("itashi",  "The best anime Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacinia magna. Praesent sed tempus nulla, ac faucibus erat. Sed iaculis purus id nisl placerat, ac tincidunt orci scelerisque. Quisque hendrerit enim ut ex vulputate, ac convallis magna iaculis. Suspendisse lacus leo, iaculis ac lobortis sed, lacinia in lorem. Pellentesque scelerisque odio ligula, a porttitor neque tempus malesuada. Curabitur sed tincidunt sem. Sed nec nulla nec nunc pretium tincidunt.",
        "./assets/anime-3.webp", "Do you have a favorite voice actor?"),
      new Post("kugo", "The best anime Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacinia magna. Praesent sed tempus nulla, ac faucibus erat. Sed iaculis purus id nisl placerat, ac tincidunt orci scelerisque. Quisque hendrerit enim ut ex vulputate, ac convallis magna iaculis. Suspendisse lacus leo, iaculis ac lobortis sed, lacinia in lorem. Pellentesque scelerisque odio ligula, a porttitor neque tempus malesuada. Curabitur sed tincidunt sem. Sed nec nulla nec nunc pretium tincidunt.",
        "./assets/anime-1.webp", ""),
      new Post("naruto", "The best animeeeeee", "./assets/anime-1.webp", "")
    ]

    this.posts[0].comments.push(
      new Comment("itashi", "Cool"),
      new Comment("itashi", "Cool! Cool! Cool!"),
      new Comment("itashi", "Cool! Cool! Cool! Cool! Cool!"),
      new Comment("itashi", "Cool! Cool! Cool! Cool!"))

    this.posts[1].comments.push(
      new Comment("itashi", "Cool"),
      new Comment("itashi", "Cool! Cool! Cool! Cool!"))
  }

  ngOnInit(): void {

  }

  isMenuButton(event : any) : boolean{
    return event.composedPath()[0].classList[0] == "modal-background"
      || event.composedPath()[0].classList[0] == "menu-button"
      || event.composedPath()[1].classList[0] == "menu-button";
  }

  deactivateAllMenuButtons(){
    this.menuButtons.forEach(button => {
      button.isActive = false
      if (button.elementId) {
        const buttonElement = <HTMLElement>document.getElementById(button.elementId)
        buttonElement.classList.remove("modal-active")
      }
    })
  }

  deactivateMenuButton(index : number, element : HTMLElement){
    if(!element.classList.contains("modal-active")){
      this.menuButtons[index].isActive = false
    }
  }

  chooseMenu(event : any, index : number) {
    const currentMenuButton = this.menuButtons[index];

    if(this.currentMenuButtonName != currentMenuButton.name) {
      this.deactivateAllMenuButtons()
    }

    this.menuButtons[index].isActive = true

    if (currentMenuButton.name == "Create") {
      if (this.isMenuButton(event)) {
        const createPostElement = <HTMLElement> document.getElementById(currentMenuButton.elementId);
        createPostElement.classList.toggle("modal-active")
        this.deactivateMenuButton(index, createPostElement)
        this.newPost.title = ""
        this.newPost.img = ""
      }
    } else if (currentMenuButton.name == "Search") {
      if (this.isMenuButton(event)) {
        const searchElement = <HTMLElement> document.getElementById(currentMenuButton.elementId);
        searchElement.classList.toggle("modal-active")
        this.deactivateMenuButton(index, searchElement)
      }
    } else if(currentMenuButton.name == "Notifications"){
      const notificationBar = <HTMLElement> document.getElementById(currentMenuButton.elementId);
      notificationBar.classList.toggle("modal-active")
      this.deactivateMenuButton(index, notificationBar)
    }

    this.currentMenuButtonName = currentMenuButton.name

    if(this.menuButtons.filter(button => button.isActive).length == 0){
      this.menuButtons[0].isActive = true
    }
  }

  closeModel(event : any){
    event.composedPath()[0].classList.remove("modal-active")
    this.menuButtons.forEach(button => button.isActive = false)
    this.menuButtons[0].isActive = true
  }

  createNewPost(value : any, event :any){
    if(event.composedPath()[0].classList[0] == "create-post-modal") {
      this.newPost.title = value.title
      this.newPost.question = value.question
      this.newPost.user = "itsanna"
      //logic to add new post
      this.posts.push(this.newPost)
      const modalElement = <HTMLElement>document.getElementById("modal-background-create-post");
      modalElement.classList.remove("modal-active")
      modalElement.children[0].classList.remove("modal-active")
    }
  }

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    this.newPost.img = await this.uploadPhoto(file);
    this.changeDetectorRef.detectChanges();
  }

  async uploadPhoto(file : File) : Promise<string>{
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }

  handleSearch(value : any){
    this.searchingList = this.users.filter(user => user.username.includes(value))
  }

  handlePostQuestion(value : any){
    console.log(this.questionLength)
    console.log(value.question.length)
    this.questionLength = value.question.length
  }

  handleWebcam(){
    this.webcamIsActive = !this.webcamIsActive
  }

  handleReplaceImage(){
    this.newPost.img = ""
  }

  handleWebCamImage(image: WebcamImage){
    this.webcamImage = image
    const dataUrl = image.imageAsDataUrl;
    const img = new Image();
    img.onload = () => {
      this.newPost.img = img.src;
    };
    img.src = dataUrl;
    this.newPost.img = dataUrl
    this.handleWebcam()
    console.log(this.newPost.img)
    console.log(dataUrl)
  }
}
