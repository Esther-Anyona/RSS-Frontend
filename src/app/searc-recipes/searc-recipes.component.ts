import { Component, OnInit } from '@angular/core';
import { RecipeapiservicesService } from '../Services/recipeapiservices.service';


@Component({
  selector: 'app-searc-recipes',
  templateUrl: './searc-recipes.component.html',
  styleUrls: ['./searc-recipes.component.css']
})
export class SearcRecipesComponent implements OnInit {

  public searchTerm: string | any;

  constructor(private myService:RecipeapiservicesService) { }

  findRecipe(searchTerm:string){
    this.myService.getRecipesBySearch(searchTerm).subscribe(data => {
      this.searchTerm = data;
    });
    // this.myService.getSearchResults(searchTerm).subscribe(
      // (response: any)=>{
      //   console.log(response);
      // });
    }


  ngOnInit(): void {
  }

}
