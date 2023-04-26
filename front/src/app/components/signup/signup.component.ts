import { Component } from '@angular/core';
import { User } from '../../models/User';
import { AppComponent } from '../../app.component';

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
      // handle invalid input
      return;
    }

    // handle valid input
  }
}
