import { Component } from '@angular/core';
import { recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { FormControl, FormGroup, Validators, FormArray,FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
// export class EditRecipeComponent {

//   id: number = 0;
//   recipe: recipe | any;
//   form: FormGroup | any;

//   constructor(private routeactive: ActivatedRoute, private service: RecipesService){}
//   ngOnInit() {
//     this.routeactive.params.subscribe((x: any) => {

//       this.id = x["id"]
//       this.recipe = this.service.recipeArr.find(tmp => tmp.id == this.id);
//       }) 
//       this.form =new FormGroup({
//       name: new FormControl(this.recipe.name, Validators.required),
//       image: new FormControl(this.recipe.image, Validators.required),
//       level: new FormControl(this.recipe.level, Validators.required),
//       during: new FormControl(this.recipe.during, Validators.required),
//       products: new FormArray(this.recipe.products,Validators.required),
//       instructions:new FormArray(this.recipe.instructions,Validators.required)
//       })
//   }
 
//   get products():FormArray{
//     return this.form.controls['products'] as FormArray<FormGroup>
//   }
//   get instructions():FormArray{
//     return this.form.controls['instructions'] as FormArray<FormGroup>
//   }
//   addProduct(){
//     this.products.push(new FormGroup({
//       count:new FormControl(''),
//       kind:new FormControl(''),
//       name:new FormControl(''),
//     }))
//     return;
//   }

  
//   }
export class EditRecipeComponent {
  id: number = 0;
  recipe: recipe | any;
  form: FormGroup | any;

  constructor(private routeactive: ActivatedRoute, private service: RecipesService, private formBuilder: FormBuilder, private router:Router) {}

  ngOnInit() {
    this.routeactive.params.subscribe((x: any) => {
      this.id = x["id"];
      this.recipe = this.service.recipeArr.find(tmp => tmp.id == this.id);
    });

    this.form = this.formBuilder.group({
      name: [this.recipe.name, Validators.required],
      image: [this.recipe.image, Validators.required],
      level: [this.recipe.level, Validators.required],
      during: [this.recipe.during, Validators.required],
      products: this.formBuilder.array(this.recipe.products.map((product: any) =>
        this.formBuilder.group({
          count: product.count,
          kind: product.kind,
          name: product.name,
        })
      )),
      instructions: this.formBuilder.array(this.recipe.instructions.map((instruction: any) =>
        this.formBuilder.group({
          instruction: instruction.instruction,
        })
      )),
    });
  }

  get products(): FormArray {
    return this.form.get('products') as FormArray;
  }

  get instructions(): FormArray {
    return this.form.get('instructions') as FormArray;
  }

  saveRecipe() {
    console.log(this.form.value);
    // this.service.recipeArr = this.service.recipeArr.filter(tmp => tmp.id !== this.id);
    let recipeData = this.form.value;
    recipeData.userId=this.recipe.userId;
    recipeData.id=this.id;
    this.service.editRecipe(recipeData);
    this.router.navigate(['/recipes']);
  }

  addProduct() {
    console.log("products: ",this.products);
    this.products.push(this.formBuilder.group({
      count: '',
      kind: '',
      name: '',
    }));
  }
  addInstruction(){
    this.instructions.push(this.formBuilder.group({
      instruction:'',
    }));
  }

 
}