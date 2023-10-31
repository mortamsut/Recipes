import { Injectable } from '@angular/core';
import { recipe, Ingridient } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeArr: recipe[] = [
    new recipe(1, "recipe1", "level1", 2, [new Ingridient(1, 3, "cup","milk")], ["asd", "zxc"]),
    new recipe(2, "recipe2", "level2", 2, [new Ingridient(1, 3, "cup","milk")], ["asd", "zxc"]),
    new recipe(3, "recipe3", "level3", 2, [new Ingridient(1, 3, "cup","milk")], ["asd", "zxc"]),
    new recipe(4, "recipe4", "level4", 2, [new Ingridient(1, 3, "cup","milk")], ["asd", "zxc"])

  ]


  addRecipe(r: recipe) {
    if (recipe.length) {
      r.id = (this.recipeArr[this.recipeArr.length - 1].id as number + 1)
    }
    else {
      r.id = 1;
    }
    this.recipeArr.push(r);
  }
}
