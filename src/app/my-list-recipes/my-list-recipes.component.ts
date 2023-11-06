import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { recipe ,User } from '../recipes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-list-recipes',
  templateUrl: './my-list-recipes.component.html',
  styleUrls: ['./my-list-recipes.component.css']
})
export class MyListRecipesComponent {
  constructor(private recipeService: RecipesService,private router: Router)
  { 
    this.temp_recipes=recipeService.recipeArr;
    this.users=recipeService.userArr;
  }
  temp_recipes: recipe[]=[];
  recipes: recipe[]=[];
  users: User[]=[];
  ngOnInit() {
    let usr=localStorage.getItem('user')||"";
    let user =JSON.parse(usr);
    const usrInd = this.users.findIndex(u=> u.id == user.id);
    let theUser = this.users[usrInd];
     console.log("the user: ",theUser);
    for(let i=0; i<theUser.idRecipes.length;i++){

      for(let j=0; j< this.temp_recipes.length; j++)
      {
        if(theUser.idRecipes[i]==this.temp_recipes[j].id)
        {
          this.recipes.push(this.temp_recipes[j]);
          break;
        }
      }
    }
    console.log("my recipes: ",this.recipes);
  }
  ShowDetails(id:any) {
    this.router.navigate(['/show_recipe/',id]);
  }
}


