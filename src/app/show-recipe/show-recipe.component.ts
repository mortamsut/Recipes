import { Component, Input } from '@angular/core';
import { User, recipe,Ingridient } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.css']
})
export class ShowRecipeComponent {

  // selectedProducts: any[] = [];
  id: number = 0;
  recipe: recipe | any;
  flag:boolean = false;
  flagEdit:boolean = false;
  constructor(private routeactive: ActivatedRoute, private service: RecipesService, private router:Router ) { }

  ngOnInit() {
    this.routeactive.params.subscribe((x: any) => {

      this.id = x["id"]
      this.recipe = this.service.recipeArr.find(tmp => tmp.id == this.id);
      console.log("userArr: ",this.service.userArr);
      console.log("rec show: ",this.recipe );
      let user=localStorage.getItem('user')||"";
      let updatuser=this.service.userArr.find(tmp => tmp.id ==JSON.parse(user).id);
      let recipeUser=updatuser?.idRecipes;
      console.log("usr: ",recipeUser);
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

  toggleSelection(product: any){
     this.service.updateListBuy(product,product.isSelected);
    }

  editRecipe(){
    this.router.navigate(['/edit_recipe/',this.id]);
  }
  removeRecipe(){
   this.service.removeRecipe(this.id);
   this.router.navigate(['/recipes/']);
  }
}