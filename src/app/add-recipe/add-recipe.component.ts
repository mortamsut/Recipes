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
    products: new FormArray([]),
    instructions:new FormArray([])
  })

  get products(){
    return this.form1.controls['products'] as FormArray<FormGroup>
  }
  addRecipe(){

    this.products.push(new FormGroup({
      count:new FormControl(''),
      kind:new FormControl(''),
      name:new FormControl(''),
    }))
    this.service.addRecipe(this.form1.value)
  }
  addProduct(){

    this.products.push(new FormGroup({
      count:new FormControl(''),
      kind:new FormControl(''),
      name:new FormControl(''),
    }))
    this.service.addRecipe(this.form1.value)
  }

}


// import {Component} from '@angular/core';
// import {MatSelectModule} from '@angular/material/select';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';

// /** @title Simple form field */
// @Component({
//   selector: 'form-field-overview-example',
//   templateUrl: 'form-field-overview-example.html',
//   styleUrls: ['form-field-overview-example.css'],
//   standalone: true,
//   imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
// })
// export class FormFieldOverviewExample {}