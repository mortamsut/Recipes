import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { FormControl, FormGroup, Validators, FormArray,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import {MatSelectModule} from '@angular/material/select';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { CommonModule } from '@angular/common';
// import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  // standalone: true,
  // imports: [MatFormFieldModule, MatInputModule, MatSelectModule,CommonModule ,MatCardModule]
  // imports: [ReactiveFormsModule,]
})
export class AddRecipeComponent {

  constructor(private service:RecipesService, private router:Router,private formBuilder: FormBuilder){}
  
    form: FormGroup=new FormGroup({
    name: new FormControl("", Validators.required),
    img: new FormControl("", Validators.required),
    level: new FormControl("", Validators.required),
    time: new FormControl("", Validators.required),
    products: new FormArray([],Validators.required),
    instructions:new FormArray([],Validators.required)
  })

  get products():FormArray{
    return this.form.controls['products'] as FormArray<FormGroup>
  }
  get instructions():FormArray{
    return this.form.controls['instructions'] as FormArray<FormGroup>
  }

  addRecipe(){
    console.log("add recipe")
    if (this.form.valid) {
     const id = localStorage.getItem("user");
      const recipeData = this.form.value;
      recipeData.userId=id;
      this.service.addRecipe(recipeData);
       this.router.navigate(['/recipes']);
    }
   return;
  }
  addProduct(){
    console.log("add product")
    this.products.push(this.formBuilder.group({
      name: [''],
      count: [''],
      kind: [''],
    }));
    // this.products.push(new FormGroup({
    //   count:new FormControl(''),
    //   kind:new FormControl(''),
    //   name:new FormControl(''),
    // }))
    //  this.service.addRecipe(this.form.value)
    return;
  }
  addinstruction(){
    console.log("add instruction")
    this.instructions.push(this.formBuilder.group({
      instruction: [''],
    }));
      // const instructionsArray = this.form.get('instructions') as FormArray;
      // instructionsArray.push(new FormControl('', Validators.required));
      //this.form.get('instrctn') setValue('');

      // const instruction = this.form.value.instructions;
    //   this.instructionArr.push(this.form.value.instructions[this.form.value.instructions.length-1].instrctn);
      //  console.log('instructions: ', this.form.value.instructions);  
      //  console.log('len: ',this.form.value.instructions.length-1);
       //console.log('instructn: ',this.form.value.instructions[0].instrctn);
     //  console.log('instructn: ',this.instructions);
      //  this.instructionArr.push(this.form.value.instructions[this.form.value.instructions.length-1]);
      //  console.log('instructionArr: ',this.instructionArr);
      //  this.form.value.instructions = this.instructionArr;
      //  console.log('instructions: ', this.form.value.instructions);
      //  console.log('instructionsArray: ', instructionsArray);
    // this.instructions.push(new FormGroup({
    //   instrctn:new FormControl(''),
    // }))
    // this.service.addRecipe(this.form.value)
    return;
  }

}