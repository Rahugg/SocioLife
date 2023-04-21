import {Post} from "./Post";

export class User{
  static usersNumber : number = 0
  id : number;
  email : String;
  username : String;
  password : String;
  posts : Post[];
  followers : User[]
  followings : User[]
  image : String;
  constructor(email : String, username : String,   password : String) {
    this.id = User.usersNumber++
    this.email = email
    this.username = username
    this.password = password
    this.posts = []
    this.followers = []
    this.followings = []
    this.image = ""
  }
}
