import { Component } from '@angular/core';
import { RecipeapiservicesService } from './Services/recipeapiservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipes';
  recipeData:any;

  constructor(private recipeapiService:RecipeapiservicesService) { }
      
      ngOnInit(): void {


        this.recipeapiService.allRecipes().subscribe((data:any)=>{

          console.log("My recipes",data);
          this.recipeData=data;
      
                    
        })

      }
}
