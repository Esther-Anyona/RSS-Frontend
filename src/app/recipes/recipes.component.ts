import { Component, OnInit } from '@angular/core';
import { SearchService } from '../Services/search.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public searchTerm: string | any;

  constructor(private myService:SearchService) { }

  findRecipe(searchTerm:string){
    this.myService.getSearchResults(searchTerm).subscribe(
      (response)=>{
        console.log(response);
      });
    }

  ngOnInit(): void {
  }

}
