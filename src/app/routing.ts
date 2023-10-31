import { Routes, RouterModule } from "@angular/router";
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { NgModule } from '@angular/core';
import {ListRecipesComponent} from './list-recipes/list-recipes.component';


const routes: Routes = [
    { path: "show_recipe/:id", component: ShowRecipeComponent },
    { path: "", component: ListRecipesComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class routing { }