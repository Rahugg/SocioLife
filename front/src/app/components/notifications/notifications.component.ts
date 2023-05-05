import {Component, OnInit} from '@angular/core';
import {CommentNotification, LikeNotification, Notifications} from "../../models/Notification";

type NotificationType = CommentNotification | LikeNotification;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{
  notificationList : NotificationType[]

  constructor() {
    this.notificationList = [
      new CommentNotification("guko", "Amazing!"),
      new LikeNotification("naruto"),
      new CommentNotification("naruto", "Wow!")
    ]
  }

  ngOnInit(): void {}
}
