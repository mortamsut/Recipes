import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { recipe } from '../recipes.model';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule],

})
export class ListRecipesComponent {
 
  constructor(private recipeService: RecipesService,private router: Router)
  {
    this.recipes=this.recipeService.recipeArr;
  }
  recipes: recipe[]=[];
  ShowDetails(id:any) {
    this.router.navigate(['/show_recipe/',id]);
  }
}

/**
 * @title Card with multiple sections
*/