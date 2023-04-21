export class Post{
  id: number;
  user: String;
  title: String;
  img: String;
  comments : Comment[]
  likes : number // there should be not number, list of id liked users
  liked : boolean // if there is current user's id in liked users list

  constructor(user : String, title : String, img: String) {
    this.id = 0
    this.user = user
    this.title = title
    this.img = img
    this.comments = []
    this.likes = 0
    this.liked = false
  }
}

export interface Comment{
  id: number
  user: String,
  userImage: String,
  title: String,
}

export interface CommentSliderIndex{
  currentIndex : number,
  length : number
}
