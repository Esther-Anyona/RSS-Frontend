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
    description: '',
    imagePath: '',
    ingredients: [], 
    rating: 0,
    procudure: '',
    category: '',
    guests: 0,
    country: '',
    date: '',
    by: '',
    published: false
  };
  currentIndex: number = -1;
  name: string = '';

  constructor(private recipeapiService:RecipeapiservicesService) { }

  ngOnInit(): void {
    this.retrieveAllRecipes();
  }
  retrieveAllRecipes(): void {
    this.recipeapiService.getAllRecipes().subscribe({
      next: (data) => {
        this.recipes = data;
        console.log(data);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
  refreshList(): void {
    this.retrieveAllRecipes();
    this.currentRecipe = {
      description: '',
      imagePath: '',
      ingredients: [],
      rating: 0,
      procudure: '',
      category: '',
      guests: 0,
      country: '',
      date: '',
      by: '',
      published: false
    };
    this.currentIndex = -1;
  }
  setCurrentRecipe(recipe: Recipe, index: number): void {
    this.currentRecipe = recipe;
    this.currentIndex = index;
  }
  removeRecipe(id: number): void {
    this.recipeapiService.deleteRecipe(id).subscribe({
      next: (data) => {
        console.log(data);
        this.refreshList();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
  searchName(): void {
    this.currentRecipe = {
      description: '',
      imagePath: '',
      ingredients: [],
      rating: 0,
      procudure: '',
      category: '',
      guests: 0,
      country: '',
      date: '',
      by: '',
      published: false
    };
    this.currentIndex = -1;
    this.recipeapiService.findRecipeByName(this.name).subscribe({
      next: (data) => {
        this.recipes = data;
        console.log(data);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  } 

}
