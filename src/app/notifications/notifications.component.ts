import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  postImages = ['/assets/img/Heroes/1.jpeg', '/assets/img/Heroes/2.jpeg', '/assets/img/Heroes/3.jpeg', '/assets/img/Heroes/4.jpeg'];
  posts = ['Your Daily Runddown is online now',' Mr. Nice viewed your profil', 'A post from your friend Tornado is popular',' New heroe has just joined your Group'];
  canFollow =true;
  constructor() { }

  ngOnInit(): void {
  }

}
