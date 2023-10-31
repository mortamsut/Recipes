import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { recipe } from '../recipes.model';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent {

  constructor(private recipeService: RecipesService)
  {
    this.recipes=this.recipeService.recipeArr;
  }
  recipes: recipe[]=[];

}
