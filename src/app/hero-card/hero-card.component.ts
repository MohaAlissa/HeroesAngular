import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
 @Input() text: string ="";
  @Input() img: string ="";

  constructor() { }
  ngOnInit(): void {
  }

}
