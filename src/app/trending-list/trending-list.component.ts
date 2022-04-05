import { Component, Input, OnInit } from '@angular/core';
import { Trending } from '../Classes/trending';

@Component({
  selector: 'app-trending-list',
  templateUrl: './trending-list.component.html',
  styleUrls: ['./trending-list.component.css']
})
export class TrendingListComponent implements OnInit {
  
  @Input() trend!:Trending;
  constructor() { }

  ngOnInit(): void {
  }

}
