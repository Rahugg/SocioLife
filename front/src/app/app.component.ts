import {Component} from '@angular/core';
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users : User[]

  constructor() {
    this.users = [
      new User("aknur@gmail.com", "aknur", "123" ),
      new User("m.luffy@gmail.com", "luffy", "123" ),
      new User("hisoga@gmail.com", "hisoga", "hisogahisoga" ),
      new User("goku@gmail.com", "goku", "goku123" )
    ]
  }
}
