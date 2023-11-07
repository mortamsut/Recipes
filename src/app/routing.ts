import { Routes, RouterModule } from "@angular/router";
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { NgModule } from '@angular/core';
import {ListRecipesComponent} from './list-recipes/list-recipes.component';
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { AboutComponent } from "./about/about.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";
import { EditRecipeComponent } from "./edit-recipe/edit-recipe.component";
import { MyListRecipesComponent } from "./my-list-recipes/my-list-recipes.component";
import {BuyListComponent} from "./buy-list/buy-list.component";
const routes: Routes = [
    { path: "show_recipe/:id", component: ShowRecipeComponent },
    { path: "add_recipe", component: AddRecipeComponent },
    { path: "recipes", component: ListRecipesComponent },
    { path: "about", component: AboutComponent },
    { path: "login", component: LoginComponent },
    { path: "", component: HomepageComponent },
    { path: "edit_recipe/:id", component: EditRecipeComponent },
    { path: "my_recipes", component: MyListRecipesComponent },
    { path: "buy_list", component: BuyListComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class routing { }