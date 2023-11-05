import { Injectable } from '@angular/core';
import { recipe, Ingridient, User, Instructions } from './recipes.model';

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
     new Instructions("לאפות ב180 מעלות 20 דקות")]),
    new recipe(2, "דונאטס", "../../assets/image/donats.jpg","בינוני", 2, [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס","חלב"),
    new Ingridient(1, 3, "M","ביצים")],
    [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
     new Instructions("לערבב בצורה אחידה"),
     new Instructions( "ליצור עיגולים"),
     new Instructions("לאפות ב180 מעלות 20 דקות")]),
    new recipe(3, "פנקייקס","../../assets/image/pancake.jpg","קל", 2, [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס","חלב "),
    new Ingridient(1, 3, "M","ביצים")],
    [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
    new Instructions("לערבב בצורה אחידה"),
    new Instructions("לטגן ")]),
    new recipe(4, "קאפקייקס", "../../assets/image/capcaikes.jpg","קל", 2,  [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס"," חלב"),
    new Ingridient(1, 3, "M","ביצים")],
    [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
     new Instructions("לערבב בצורה אחידה"),
     new Instructions( "ליצור עיגולים"),
     new Instructions("לאפות ב180 מעלות 20 דקות")]),
  new recipe(5, "עוגיות שוקולד ציפס","../../assets/image/chips.jpg", "קל", 2,
  [new Ingridient(1, 3, "כוס","קמח"),
   new Ingridient(1, 1, "כוס","שוקולד ציפס"),
   new Ingridient(1, 3, "M","ביצים")],
   [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
   new Instructions("לערבב בצורה אחידה"),
   new Instructions( "ליצור עיגולים"),
   new Instructions("לאפות ב180 מעלות 20 דקות")]),
   new recipe(6, "דונאטס", "../../assets/image/donats.jpg","בינוני", 2, [new Ingridient(1, 3, "כוס","קמח"),
   new Ingridient(1, 1, "כוס","חלב"),
   new Ingridient(1, 3, "M","ביצים")],
   [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
   new Instructions("לערבב בצורה אחידה"),
   new Instructions( "ליצור עיגולים"),
   new Instructions("לאפות ב180 מעלות 20 דקות")]),
   new recipe(7, "פנקייקס","../../assets/image/pancake.jpg","קל", 2, [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס","חלב "),
    new Ingridient(1, 3, "M","ביצים")],
    [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
    new Instructions("לערבב בצורה אחידה"),
    new Instructions("לטגן ")]),
    new recipe(8, "קאפקייקס", "../../assets/image/capcaikes.jpg","קל", 2,  [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס"," חלב"),
    new Ingridient(1, 3, "M","ביצים")],
    [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
     new Instructions("לערבב בצורה אחידה"),
     new Instructions( "ליצור עיגולים"),
     new Instructions("לאפות ב180 מעלות 20 דקות")]),
  new recipe(9, "עוגיות שוקולד ציפס","../../assets/image/chips.jpg", "קל", 2,
  [new Ingridient(1, 3, "כוס","קמח"),
   new Ingridient(1, 1, "כוס","שוקולד ציפס"),
   new Ingridient(1, 3, "M","ביצים")],
   [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
   new Instructions("לערבב בצורה אחידה"),
   new Instructions( "ליצור עיגולים"),
   new Instructions("לאפות ב180 מעלות 20 דקות")]),
   new recipe(10, "דונאטס", "../../assets/image/donats.jpg","בינוני", 2, [new Ingridient(1, 3, "כוס","קמח"),
   new Ingridient(1, 1, "כוס","חלב"),
   new Ingridient(1, 3, "M","ביצים")],
   [new Instructions("לשפוך את כל המרכיבים לקערה אחת"), 
   new Instructions("לערבב בצורה אחידה"),
   new Instructions( "ליצור עיגולים"),
   new Instructions("לאפות ב180 מעלות 20 דקות")]),
  ]

  userArr:User[]=[
    new User(1,"Michal","0556773811","michal1212",[1,3],[]),
    new User(2,"mor","0556773811","123",[1,3],[])
  ]

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
  }
}
