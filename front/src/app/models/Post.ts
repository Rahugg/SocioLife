import {User} from "./User";

export class Post{
  static postNumber = 0
  id: number;
  user: String;
  title: String;
  question : String;
  img: String;
  comments : Comment[]
  likes : number // there should be not number, list of id liked users
  liked : boolean // if there is current user's id in liked users list

  constructor(user : String, title : String, img: String, question : String) {
    this.id = Post.postNumber++
    this.user = user
    this.title = title
    this.question = question
    this.img = img
    this.comments = []
    this.likes = 0
    this.liked = false
  }
}

export class Comment{
  static commentNumber = 0
  id: number;
  user: String;
  title: String
  date: number

  constructor(user : String, title : String) {
    this.id = Comment.commentNumber++
    this.user = user
    this.title = title
    this.date = Date.now()
  }
}
