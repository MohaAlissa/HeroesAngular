import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {
  names = [
    'Dr.Hulk',
    'Rubberman',
    'Dr. IQ',
    'Bombasto',
    'Celeritas',
    'Narco',
    'Volkano'
  ];
  images =[
    'assets/img/Heroes/7.png',
    'assets/img/Heroes/8.png',
    'assets/img/Heroes/9.png',
    'assets/img/Heroes/10.png',
    'assets/img/Heroes/11.png',
    'assets/img/Heroes/12.png',
    'assets/img/Heroes/5.jpeg',

  ];
  texts = ['I am the best Hero','Catch me if you can','You dont need to be a superhero to get the girl', 'This war will never be forgotten','A hero is no braver than an ordinary man', 'Every villian is a hero in his own mind', 'A hero is someone who has given his or her life to something bigger than oneself'];
  constructor() {
  }

  ngOnInit(): void {
  }

}
