import {Component} from '@angular/core';
import {User} from '../../models/User';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  users: User[] = [];
  loginErrorActive = false;

  constructor(public app: AppComponent) {
    this.users = app.users;
  }

  login(value: any, $event: any) {
    console.log(value);

    const user = this.users.find(user => user.username === value.username);

    if (user) {
      if (value.password === user.password) {
        window.location.href = 'main';
      } else {
        this.showLoginError();
      }
    } else {
      this.showLoginError();
    }
  }

  showLoginError() {
    this.loginErrorActive = true;
  }

  hideLoginError() {
    this.loginErrorActive = false;
  }
}
