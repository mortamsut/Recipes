import { Component, Input } from '@angular/core';
import { recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.css']
})
export class ShowRecipeComponent {


  id: number = 0;
  recipe: recipe | any;
  constructor(private routeactive: ActivatedRoute, private service: RecipesService) { }

  ngOnInit() {
    this.routeactive.params.subscribe((x: any) => {

      this.id = x["id"]
      this.recipe = this.service.recipeArr.find(tmp => tmp.id == this.id);

    })
  }
}