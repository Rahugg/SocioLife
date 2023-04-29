import {Component} from '@angular/core';
import {User} from '../../models/User';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  users: User[] = [];

  constructor(public app: AppComponent) {
    this.users = app.users;
  }

  signup(value: any, $event: any) {
    if (!(value.email && value.username && value.password && value.passwordVerification)) {
      alert("Not valid password")
      return;
    }
    this.users.push(new User(value.email, value.username, value.password));
    console.log(this.users[this.users.length - 1])
    window.location.href = 'signin';
  }
}
