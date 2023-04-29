import {ChangeDetectorRef, Component} from '@angular/core';
import {Post} from "../../models/Post";
import {User} from "../../models/User";
import {AppComponent} from "../../app.component";
import {SigninComponent} from "../signin/signin.component";

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
  posts : Post[] = []
  menuButtons : MenuButton[] = []
  newPost : Post
  searchingList : User[] = []
  questionLength : number = 0

  constructor(public app : AppComponent, public changeDetectorRef : ChangeDetectorRef) {
    this.users = app.users
    this.newPost = {} as Post

    this.menuButtons = [
      {name : "Home", isActive : true, activeIcon :  "./assets/icons/icon-home-active.png", inactiveIcon :  "./assets/icons/icon-home-inactive.png"},
      {name : "Search", isActive : false, activeIcon :  "./assets/icons/icon-search-active.png", inactiveIcon :  "./assets/icons/icon-search-inactive.png"},
      {name : "Create", isActive : false, activeIcon : "./assets/icons/icon-add-active.png", inactiveIcon :  "./assets/icons/icon-add-inactive.png"}
    ]

    this.posts = [
      new Post("itashi",  "The best anime Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacinia magna. Praesent sed tempus nulla, ac faucibus erat. Sed iaculis purus id nisl placerat, ac tincidunt orci scelerisque. Quisque hendrerit enim ut ex vulputate, ac convallis magna iaculis. Suspendisse lacus leo, iaculis ac lobortis sed, lacinia in lorem. Pellentesque scelerisque odio ligula, a porttitor neque tempus malesuada. Curabitur sed tincidunt sem. Sed nec nulla nec nunc pretium tincidunt.",
        "./assets/anime-3.webp", "Do you have a favorite voice actor?"),
      new Post("kugo", "The best anime Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacinia magna. Praesent sed tempus nulla, ac faucibus erat. Sed iaculis purus id nisl placerat, ac tincidunt orci scelerisque. Quisque hendrerit enim ut ex vulputate, ac convallis magna iaculis. Suspendisse lacus leo, iaculis ac lobortis sed, lacinia in lorem. Pellentesque scelerisque odio ligula, a porttitor neque tempus malesuada. Curabitur sed tincidunt sem. Sed nec nulla nec nunc pretium tincidunt.",
        "./assets/anime-1.webp", ""),
      new Post("naruto", "The best animeeeeee", "./assets/anime-1.webp", "")
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

  createNewPost(value : any){

    this.newPost.title = value.title
    this.newPost.question = value.question
    this.newPost.user = "itsanna"
    //logic to add new post
    this.posts.push(this.newPost)

    // @ts-ignore
    document.getElementById("modal-background-create-post").classList.toggle("modal-active")
    // @ts-ignore
    document.getElementById("modal-background-create-post").children[0].classList.toggle("modal-active")
  }

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    this.newPost.img = await this.uploadPhoto(file);
    this.changeDetectorRef.detectChanges();
    console.log(this.newPost.img)
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

}
