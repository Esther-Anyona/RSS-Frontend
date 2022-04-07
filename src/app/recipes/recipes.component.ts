import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { SearchService } from '../Services/search.service';
import { RecipeapiservicesService } from '../Services/recipeapiservices.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, AfterViewChecked {
  public searchTerm: string | any;

  constructor(private myService:RecipeapiservicesService, private route:ActivatedRoute) { }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }

  findRecipe(searchTerm:string){
    this.myService.getRecipesBySearch(searchTerm).subscribe(data => {
      this.searchTerm = data;
    });
    // this.myService.getSearchResults(searchTerm).subscribe(
      // (response: any)=>{
      //   console.log(response);
      // });
    }

  recipeData:any = [];

  ngOnInit(): void {
    this.myService.getAllRecipes().subscribe(data => {
      console.log(data);
      this.recipeData = data;

      console.log(this.route.snapshot.paramMap.get('searchTerm'));
    });
  }

}
