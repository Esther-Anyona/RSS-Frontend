import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'https://delicious-recipes-app.herokuapp.com/api/recipes';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeapiservicesService {

  constructor(private http:HttpClient) { }
  getAllRecipes():Observable<Recipe[]>{
    return this.http.get<Recipe[]>(baseUrl);
  }
  getRecipeById(id:any):Observable<any>{
    return this.http.get(`${baseUrl}/${id}`);
  }
  addRecipe(recipe:any):Observable<any>{
    return this.http.post(baseUrl,recipe);
  }
  updateRecipe(id:number, recipe:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,recipe);
  }
  deleteRecipe(id:number):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAllRecipes():Observable<any>{
    return this.http.delete(baseUrl);
  }
  findRecipeByName(name:string):Observable<any>{
    return this.http.get(`${baseUrl}?name=${name}`);
  }

}
