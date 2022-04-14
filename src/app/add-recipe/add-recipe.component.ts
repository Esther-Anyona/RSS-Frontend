import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeapiservicesService } from '../Services/recipeapiservices.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipe: Recipe = {
    name: '',
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
  submitted=false;

  constructor(private recipeapiService: RecipeapiservicesService) { }

  ngOnInit(): void {
  }
  saveRecipe(): void {
    const data = {
      name: this.recipe.name,
      description: this.recipe.description,
      imagePath: this.recipe.imagePath,
      ingredients: this.recipe.ingredients,
      rating: this.recipe.rating,
      procudure: this.recipe.procudure,
      category: this.recipe.category,
      guests: this.recipe.guests,
      country: this.recipe.country,
      date: this.recipe.date,
      by: this.recipe.by,
      published: this.recipe.published
    };
    this.recipeapiService.addRecipe(data).subscribe({
      next: response => {
        console.log(response);
        this.submitted=true;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  newRecipe(): void {
    this.submitted=false;
    this.recipe = {
      name: '',
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
  }

}
