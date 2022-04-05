import { Component, OnInit } from '@angular/core';
import { Trending } from '../Classes/trending';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trends: Trending[]=[
    new Trending(1, 'Developers Portion','5','Lorem ipsum jpsum','garlic $ ginger',5,'Kenya')
    // new Trending(2,'Pythonistas snack','Lorem ipsum jpsum'),
    // new Trending(3,'Java daily bread','Lorem ipsum jpsum'),
    // new Trending(4,'For beginners','Lorem ipsum jpsum')
  ]

  toggleDetails(index:number){
    this.trends[index].showDescription = !this.trends[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
