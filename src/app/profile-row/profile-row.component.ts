import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss'],
})
export class ProfileRowComponent implements OnInit {
  @Input() name = 'Dr. Hulk';
  @Input() img = '/assets/img/Heroes/1.jpeg';
  @Input() description = 'The best Hero';
  @Input() canFollow = true;

  constructor(public fs: FriendService) {}

  ngOnInit(): void {}
}
