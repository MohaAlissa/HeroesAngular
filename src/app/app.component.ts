import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Project';
  postText = [
    'Dr. Hulk',
    'Tornado',
    'Magneta',
    'Mr. Nice',
    'Narco'
    ];
  postImages = [
    'assets/img/Heroes/1.jpeg',
    'assets/img/Heroes/2.jpeg',
    'assets/img/Heroes/3.jpeg',
    'assets/img/Heroes/4.jpeg',
    'assets/img/Heroes/5.jpeg'
  ];
  buttonClicked(){
    alert("Oh No");
  }
}
