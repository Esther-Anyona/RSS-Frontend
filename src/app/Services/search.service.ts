import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../Classes/recipe';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  recipes!: Recipe;
  recipe_name: any;
  //   constructor(private http: HttpClient) { }
  //   getSearchResults(searchTerm: string) {
  //     return this.http.get(`https://api.edamam.com/search?q=${searchTerm}&app_id=${this.appId}&app_key=${this.appKey}`);
  

  constructor(private http: HttpClient) { 
    this.recipe_name = '';
  }
  getSearchResults(searchTerm: string) {
    return this.http.get(`https://localhost/api/recipe/search?q=${this.recipe_name}`);
  }
}
