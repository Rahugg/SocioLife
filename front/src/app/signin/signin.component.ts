import { Component } from '@angular/core';
import {User} from "../modules/User";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  users : User[]

  constructor() {
    this.users = [
      new User("aknur@gmail.com", "aknur", "123" )
    ]
  }

  login(value : any, $event : any){
    console.log(value)

    let user = this.users.filter(user => user.username == value.username)[0]

    if(user){
      if(value.password == user.password){
        window.location.href = "main"
      } else {
        this.loginError()
      }
    } else {
      this.loginError()
    }

  }

  loginError(){
    // @ts-ignore
    document.getElementById("username-frame").style.borderColor = "rgba(178, 137, 132, 0.85)"
    // @ts-ignore
    document.getElementById("password-frame").style.borderColor = "rgba(178, 137, 132, 0.85)"
    // @ts-ignore
    document.getElementById("login-error").classList.add("login-error-active")

  }


}