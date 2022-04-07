import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeapiservicesService {
  getSearchResults(searchTerm: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  //recipe api url
  recipesApiUrl = 'http://localhost/api/recipes';
  //recipe api by search
  recipesSearchUrl = 'http://localhost/api/recipes/search';

  //grab all recipes api
  getAllRecipes():Observable<any>{
    return this.http.get(this.recipesApiUrl);
  }

  //grab recipes by search
  getRecipesBySearch(searchTerm:string):Observable<any>{
    return this.http.get(this.recipesSearchUrl + '/' + searchTerm);
  }

}
