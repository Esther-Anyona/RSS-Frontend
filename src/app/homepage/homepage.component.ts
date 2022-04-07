// import { Component, OnInit } from '@angular/core';
// import { User } from '../Classes/user';

// @Component({
//   selector: 'app-homepage',
//   templateUrl: './homepage.component.html',
//   styleUrls: ['./homepage.component.css']
// })
// export class HomepageComponent implements OnInit {

//   userResults!:User
//   recipeResults:any;

//   constructor(private myService:SearchService) { }

//   ngOnInit(): void {
//     this.myService.user().subscribe((gityResults:any)=>{
//       this.userResults=gityResults
//     }, (error: any)=>{
//       console.log("Shoking Error", error);
//     })

//     this.myService.fetchRecipes().subscribe((RecipeResults:any)=>{
//       this.recipeResults=RecipeResults
//       console.log("Recipes", RecipeResults);
//     },(error:any)=>{
//       console.log("ResultsError",error);
//     })
//   }

// }
