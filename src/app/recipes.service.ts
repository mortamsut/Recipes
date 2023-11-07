import { Injectable } from '@angular/core';
import { recipe, Ingridient, User, Instructions, IngridientToBuy } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeArr: recipe[] = [
    new recipe(1, "עוגיות שוקולד ציפס","../../assets/image/chips.jpg", "קל", 2,
   [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס","שוקולד ציפס"),
    new Ingridient(1, 3, "M","ביצים")],
     [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
     new Instructions("לערבב בצורה אחידה"),
     new Instructions( "ליצור עיגולים"),
     new Instructions("לאפות ב180 מעלות 20 דקות")],1),
    new recipe(2, "דונאטס", "../../assets/image/donats.jpg","בינוני", 2, [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס","חלב"),
    new Ingridient(1, 3, "M","ביצים")],
    [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
     new Instructions("לערבב בצורה אחידה"),
     new Instructions( "ליצור עיגולים"),
     new Instructions("לאפות ב180 מעלות 20 דקות")],1),
    new recipe(3, "פנקייקס","../../assets/image/pancake.jpg","קל", 2, [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס","חלב "),
    new Ingridient(1, 3, "M","ביצים")],
    [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
    new Instructions("לערבב בצורה אחידה"),
    new Instructions("לטגן ")],1),
    new recipe(4, "קאפקייקס", "../../assets/image/capcaikes.jpg","קל", 2,  [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס"," חלב"),
    new Ingridient(1, 3, "M","ביצים")],
    [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
     new Instructions("לערבב בצורה אחידה"),
     new Instructions( "ליצור עיגולים"),
     new Instructions("לאפות ב180 מעלות 20 דקות")],1),
  new recipe(5, "עוגיות שוקולד ציפס","../../assets/image/chips.jpg", "קל", 2,
  [new Ingridient(1, 3, "כוס","קמח"),
   new Ingridient(1, 1, "כוס","שוקולד ציפס"),
   new Ingridient(1, 3, "M","ביצים")],
   [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
   new Instructions("לערבב בצורה אחידה"),
   new Instructions( "ליצור עיגולים"),
   new Instructions("לאפות ב180 מעלות 20 דקות")],2),
   new recipe(6, "דונאטס", "../../assets/image/donats.jpg","בינוני", 2, [new Ingridient(1, 3, "כוס","קמח"),
   new Ingridient(1, 1, "כוס","חלב"),
   new Ingridient(1, 3, "M","ביצים")],
   [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
   new Instructions("לערבב בצורה אחידה"),
   new Instructions( "ליצור עיגולים"),
   new Instructions("לאפות ב180 מעלות 20 דקות")],2),
   new recipe(7, "פנקייקס","../../assets/image/pancake.jpg","קל", 2, [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס","חלב "),
    new Ingridient(1, 3, "M","ביצים")],
    [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
    new Instructions("לערבב בצורה אחידה"),
    new Instructions("לטגן ")],2),
    new recipe(8, "קאפקייקס", "../../assets/image/capcaikes.jpg","קל", 2,  [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס"," חלב"),
    new Ingridient(1, 3, "M","ביצים")],
    [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
     new Instructions("לערבב בצורה אחידה"),
     new Instructions( "ליצור עיגולים"),
     new Instructions("לאפות ב180 מעלות 20 דקות")],2),
  new recipe(9, "עוגיות שוקולד ציפס","../../assets/image/chips.jpg", "קל", 2,
  [new Ingridient(1, 3, "כוס","קמח"),
   new Ingridient(1, 1, "כוס","שוקולד ציפס"),
   new Ingridient(1, 3, "M","ביצים")],
   [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
   new Instructions("לערבב בצורה אחידה"),
   new Instructions( "ליצור עיגולים"),
   new Instructions("לאפות ב180 מעלות 20 דקות")],2),
   new recipe(10, "דונאטס", "../../assets/image/donats.jpg","בינוני", 2, [new Ingridient(1, 3, "כוס","קמח"),
   new Ingridient(1, 1, "כוס","חלב"),
   new Ingridient(1, 3, "M","ביצים")],
   [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
   new Instructions("לערבב בצורה אחידה"),
   new Instructions( "ליצור עיגולים"),
   new Instructions("לאפות ב180 מעלות 20 דקות")],2),
  ]

  userArr:User[]=[
    new User(1,"Michal","0556773811","michal1212",[1,2,3,4],[new IngridientToBuy(1, 1, "כוס","חלב",true)]),
    new User(2,"mor","0556773811","123",[5,6,7,8,9,10],[])
  ]
   
   addRecipesUser(userId:number|any, id:number|any)
   {
    const userIndex = this.userArr.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      console.log("usr detail: "+this.userArr[userIndex].idRecipes);
      if (!this.userArr[userIndex].idRecipes) {
        this.userArr[userIndex].idRecipes = [];
      }
      
      if (!this.userArr[userIndex].idRecipes.includes(id)+"id rec: "+id) {
        this.userArr[userIndex].idRecipes.push(id);
      }
      console.log("usr detail: ", this.userArr[userIndex].idRecipes+" id rec: "+id);
    }
   }

  addRecipe(r: recipe) {
    if (recipe.length) {
      r.id = (this.recipeArr[this.recipeArr.length - 1].id as number + 1);
    }
    else {
      r.id = 1;
    }
    console.log("instructionARR: ",r.instructions);
    console.log('recipe: ',r);
    this.recipeArr.push(r);
    this.addRecipesUser(r.userId,r.id);
  }
  editRecipe(r: recipe)
  {
    const index = this.recipeArr.findIndex(recipe => recipe.id == r.id);
    if (index != -1) {
        this.recipeArr[index]=r;
      }
  } 

  updateListBuy(product:any, select:boolean)
  {
    let prodB= new IngridientToBuy
    (product.id,product.count,product.kind,product.name,select);
    let user=localStorage.getItem('user')||"";
    const usrId = JSON.parse(user).id;
    const index = this.userArr.findIndex(u=>u.id==usrId);
    if(select){
      this.userArr[index].shoppingList.push(prodB);
    }
    else{
      const ind = this.userArr[index].shoppingList.findIndex((p) => p.id === product.id);
        if (index !== -1) {
          this.userArr[index].shoppingList.splice(index, 1);
        }
    }
    console.log("shoppingList: ", this.userArr[index].shoppingList);
  }

  removeRecipe(id: number)
  {
    // console.log("the id r: ",id);
    // console.log("recipes before del: ",this.recipeArr);
    // console.log("usrs before del: ",this.userArr);
    const index = this.recipeArr.findIndex(recipe => recipe.id == id);
    if (index != -1) {
      let userId = this.recipeArr[index].userId;
      this.recipeArr.splice(index,1);
      const usrIndex= this.userArr.findIndex(usr=>usr.id==userId);
      if(usrIndex != -1){
        if(Array.isArray(this.userArr[usrIndex].idRecipes)){
            const indProd = this.userArr[usrIndex].idRecipes.findIndex(r=>r==id);
          if(indProd!=-1)
              {  this.userArr[usrIndex].idRecipes.splice(indProd,1);}
      }  
    }
      // console.log("recipes after del: ",this.recipeArr);
      // console.log("usrs after del: ",this.userArr);
    }
  } 
  
}
