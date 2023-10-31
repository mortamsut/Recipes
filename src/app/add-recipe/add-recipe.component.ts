import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  constructor(private service:RecipesService){}
  form1: FormGroup=new FormGroup({
    
    name: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    product: new FormArray([]),
    instructions:new FormArray([])
  })


  get product(){
    return this.form1.controls['product'] as FormArray<FormGroup>
  }
  addRecipe(){

    this.product.push(new FormGroup({
      count:new FormControl(''),
      kind:new FormControl(''),
      name:new FormControl(''),
    }))
    this.service.addRecipe(this.form1.value)
  }

}
