import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notificationbox',
  templateUrl: './notificationbox.component.html',
  styleUrls: ['./notificationbox.component.scss']
})
export class NotificationboxComponent implements OnInit {

  @Input() name = 'Dr. Hulk';
  @Input() img = '/assets/img/Heroes/1.jpeg';
  @Input() post ='Your Daily Runddown is online now';
  @Input() canFollow =true;
  constructor() { }

  ngOnInit(): void {
  }

}
