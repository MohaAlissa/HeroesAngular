import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  postImages = [
    '/assets/img/Heroes/7.png',
    '/assets/img/Heroes/10.png',
    '/assets/img/Heroes/11.png',
    '/assets/img/Heroes/5.jpeg',
    '/assets/img/Heroes/12.png',
    '/assets/img/Heroes/13.png',
  ];
  posts = [
    'You May Know Dr. Hulk, would you like to send him a Messege',
    ' Bombasto viewed your profil',
    'A post from your friend Celeritas is popular',
    ' Volkano has just joined your Group',
    ' Narco is Online now, would you like to write him ?',
    ' Weedey has similar interestes like you, would you like to add him?',
  ];
  canFollow = true;
  constructor() {}

  ngOnInit(): void {}
}
