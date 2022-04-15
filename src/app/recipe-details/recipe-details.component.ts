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
    by: ''
  };
  message: string = '';

  constructor(
    private recipeapiService: RecipeapiservicesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getRecipe(this.route.snapshot.params['id']);
    }
  }
  getRecipe(id: string): void {
    this.recipeapiService.getRecipeById(id).subscribe({
      next: (data) => {
        this.currentRecipe = data;
        console.log(data);
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
  updateRecipe(): void {
    this.message = '';
    this.recipeapiService.updateRecipe(this.currentRecipe.id, this.currentRecipe).subscribe({
      next: (response) => {
        console.log(response);
        this.message = response.message ? response.message: 'Recipe updated successfully';
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
