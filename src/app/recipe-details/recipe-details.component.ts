import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeapiservicesService } from '../Services/recipeapiservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() viewMode = 'false';
  @Input() currentRecipe: Recipe = {
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
  message: string = '';

  constructor(
    private recipeapiService: RecipeapiservicesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    if (this.viewMode) {
      this.message = '';
      this.getRecipe(this.route.snapshot.params['id']);
    }
  }
  getRecipe(id: string): void {
    this.recipeapiService.getRecipeById(id).subscribe({
      next: (response: Recipe) => {
        this.currentRecipe = response;
        console.log(response);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
  updatePublished(status: boolean): void {
    const data = {
      name: this.currentRecipe.name,
      description: this.currentRecipe.description,
      imagePath: this.currentRecipe.imagePath,
      ingredients: this.currentRecipe.ingredients,
      rating: this.currentRecipe.rating,
      procudure: this.currentRecipe.procudure,
      category: this.currentRecipe.category,
      guests: this.currentRecipe.guests,
      country: this.currentRecipe.country,
      date: this.currentRecipe.date,
      by: this.currentRecipe.by,
      published: status
    };
    this.message='';
    this.recipeapiService.updateRecipe(this.currentRecipe.id, data).subscribe({
      next: (response) => {
        console.log(response);
        this.currentRecipe.published = status;
        this.message = 'Recipe updated successfully';
      },
      error: (error: any) => {
        console.error(error);
        this.message = 'Error updating recipe';
      }
    });
  }
  updateRecipe(): void {
    this.message = '';
    this.recipeapiService.updateRecipe(this.currentRecipe.id, this.currentRecipe).subscribe({
      next: (response) => {
        console.log(response);
        this.message = 'Recipe updated successfully';
      },
      error: (error: any) => {
        console.error(error);
        this.message = 'Error updating recipe';
      }
    });
  }
  deleteRecipe(): void {
    this.recipeapiService.deleteRecipe(this.currentRecipe.id).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/recipes']);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }


}
