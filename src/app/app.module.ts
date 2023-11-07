import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowRecipeComponent } from './show-recipe/show-recipe.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { routing } from './routing';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { MyListRecipesComponent } from './my-list-recipes/my-list-recipes.component';
import {MatIconModule} from '@angular/material/icon';
import { BuyListComponent } from './buy-list/buy-list.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ShowRecipeComponent,
    //ListRecipesComponent,
    AddRecipeComponent,
    AboutComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    EditRecipeComponent,
    MyListRecipesComponent,
    BuyListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
  ],

  providers: [],
  bootstrap: [AppComponent,],
  exports: [MatButtonModule, MatInputModule, MatCardModule,MatSelectModule,],
})
export class AppModule {}
