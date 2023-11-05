import { Component, Input } from '@angular/core';
import { User, recipe } from '../recipes.model';
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
  flag:boolean = false;
  flagEdit:boolean = false;
  constructor(private routeactive: ActivatedRoute, private service: RecipesService) { }

  ngOnInit() {
    this.routeactive.params.subscribe((x: any) => {

      this.id = x["id"]
      this.recipe = this.service.recipeArr.find(tmp => tmp.id == this.id);
      console.log("rec show: ",this.recipe );
      let user=localStorage.getItem('user')||"";
      let recipeUser=JSON.parse(user).idRecipes;
      console.log(recipeUser)
      if(recipeUser)
        for(let i=0; i<recipeUser.length; i++) {
            console.log(this.id)
            if(recipeUser[i]==this.id){
              console.log(this.flag)
              this.flag=true;
              console.log(this.flag)
              break
            }
        }
    })
  }
  editRecipe(){
    this.flagEdit=true;
    console.log(this.flagEdit)
  }
}