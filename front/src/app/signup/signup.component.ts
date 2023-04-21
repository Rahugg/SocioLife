import { Component } from '@angular/core';
import {User} from "../modules/User";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup(value : any, $event : any){
    if(value.email && value.username && value.password && value.passwordVerification){
      //check if each input
    } else {
      // border color - red
    }
  }
}
