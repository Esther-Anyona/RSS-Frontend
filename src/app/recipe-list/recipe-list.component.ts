import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeapiservicesService } from '../Services/recipeapiservices.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes?: Recipe[];
  currentRecipe: Recipe = {
    recipe_name: '',
    ingredient: '',
    category: '',
    recipe_pic: '',
    country: '',
    procedure: '',
    guests_served:0,
    created_date: '',  
    created_by: ''
  };
  currentIndex: number = -1;
  name: string = '';
  recipeData:any;

  constructor(private recipeapiService:RecipeapiservicesService) { }

  ngOnInit(): void {
    this.recipeapiService.allRecipes().subscribe((data:any)=>{

      console.log("My recipes",data);
      this.recipeData=data;
  
                
    })
    this.retrieveAllRecipes();
  }
  retrieveAllRecipes(): void {
    this.recipeapiService.getAllRecipes().subscribe({
      next: (data) => {
        this.recipes = data;
        console.log("My recipes",data);
      },
    });
  }
  refreshList(): void {
    this.retrieveAllRecipes();
    this.currentRecipe = {
      recipe_name: '',
      ingredient: '',
      category: '',
      recipe_pic: '',
      country: '',
      procedure: '',
      guests_served:0,
      created_date: '',  
      created_by: ''
    };
    this.currentIndex = -1;
  }
  setCurrentRecipe(recipe: Recipe, index: number): void {
    this.currentRecipe = recipe;
    this.currentIndex = index;
  }
  removeAllRecipes(): void {
    this.recipeapiService.deleteAllRecipes().subscribe({
      next: (response) => {
        console.log(response);
        this.refreshList();
      },
    });
  }
  searchName(): void {
    this.currentRecipe = {
      recipe_name: '',
      ingredient: '',
      category: '',
      recipe_pic: '',
      country: '',
      procedure: '',
      guests_served:0,
      created_date: '',  
      created_by: ''
    };
    this.currentIndex = -1;
    this.recipeapiService.findRecipeByName(this.name).subscribe({
      next: (data) => {
        this.recipes = data;
        console.log("My recipes",data);
      },
    });
  } 

}
