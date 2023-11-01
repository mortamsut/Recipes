import { Injectable } from '@angular/core';
import { recipe, Ingridient } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeArr: recipe[] = [
    new recipe(1, "עוגיות שוקולד ציפס","../../assets/image/chips.jpg", "קל", 2,
   [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס","שוקולד ציפס"),
    new Ingridient(1, 3, "M","ביצים")],
     ["לשפוך את כל המרכיבים לקערה אחת", 
     "לערבב בצורה אחידה",
    "ליצור עיגולים",
  "לאפות ב180 מעלות 20 דקות"]),
    new recipe(2, "דונאטס", "../../assets/image/donats.jpg","בינוני", 2, [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס","חלב"),
    new Ingridient(1, 3, "M","ביצים")],
     ["לשפוך את כל המרכיבים לקערה אחת", 
     "לערבב בצורה אחידה",
    "ליצור עיגולים",
  "לאפות ב180 מעלות 20 דקות"]),
    new recipe(3, "פנקייקס","../../assets/image/pancake.jpg","קל", 2, [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס","חלב "),
    new Ingridient(1, 3, "M","ביצים")],
     ["לשפוך את כל המרכיבים לקערה אחת", 
     "לערבב בצורה אחידה",
    " לטגן"]),
    new recipe(4, "קאפקייקס", "../../assets/image/capcaikes.jpg","קל", 2,  [new Ingridient(1, 3, "כוס","קמח"),
    new Ingridient(1, 1, "כוס"," חלב"),
    new Ingridient(1, 3, "M","ביצים")],
     ["לשפוך את כל המרכיבים לקערה אחת", 
     "לערבב בצורה אחידה",
  "לאפות ב180 מעלות 20 דקות"]),
  new recipe(1, "עוגיות שוקולד ציפס","../../assets/image/chips.jpg", "קל", 2,
  [new Ingridient(1, 3, "כוס","קמח"),
   new Ingridient(1, 1, "כוס","שוקולד ציפס"),
   new Ingridient(1, 3, "M","ביצים")],
    ["לשפוך את כל המרכיבים לקערה אחת", 
    "לערבב בצורה אחידה",
   "ליצור עיגולים",
 "לאפות ב180 מעלות 20 דקות"]),
   new recipe(2, "דונאטס", "../../assets/image/donats.jpg","בינוני", 2, [new Ingridient(1, 3, "כוס","קמח"),
   new Ingridient(1, 1, "כוס","חלב"),
   new Ingridient(1, 3, "M","ביצים")],
    ["לשפוך את כל המרכיבים לקערה אחת", 
    "לערבב בצורה אחידה",
   "ליצור עיגולים",
 "לאפות ב180 מעלות 20 דקות"]),
   new recipe(3, "פנקייקס","../../assets/image/pancake.jpg","קל", 2, [new Ingridient(1, 3, "כוס","קמח"),
   new Ingridient(1, 1, "כוס","חלב "),
   new Ingridient(1, 3, "M","ביצים")],
    ["לשפוך את כל המרכיבים לקערה אחת", 
    "לערבב בצורה אחידה",
   " לטגן"]),
   new recipe(4, "קאפקייקס", "../../assets/image/capcaikes.jpg","קל", 2,  [new Ingridient(1, 3, "כוס","קמח"),
   new Ingridient(1, 1, "כוס"," חלב"),
   new Ingridient(1, 3, "M","ביצים")],
    ["לשפוך את כל המרכיבים לקערה אחת", 
    "לערבב בצורה אחידה",
 "לאפות ב180 מעלות 20 דקות"]),
 new recipe(1, "עוגיות שוקולד ציפס","../../assets/image/chips.jpg", "קל", 2,
 [new Ingridient(1, 3, "כוס","קמח"),
  new Ingridient(1, 1, "כוס","שוקולד ציפס"),
  new Ingridient(1, 3, "M","ביצים")],
   ["לשפוך את כל המרכיבים לקערה אחת", 
   "לערבב בצורה אחידה",
  "ליצור עיגולים",
"לאפות ב180 מעלות 20 דקות"]),
  new recipe(2, "דונאטס", "../../assets/image/donats.jpg","בינוני", 2, [new Ingridient(1, 3, "כוס","קמח"),
  new Ingridient(1, 1, "כוס","חלב"),
  new Ingridient(1, 3, "M","ביצים")],
   ["לשפוך את כל המרכיבים לקערה אחת", 
   "לערבב בצורה אחידה",
  "ליצור עיגולים",
"לאפות ב180 מעלות 20 דקות"]),
  new recipe(3, "פנקייקס","../../assets/image/pancake.jpg","קל", 2, [new Ingridient(1, 3, "כוס","קמח"),
  new Ingridient(1, 1, "כוס","חלב "),
  new Ingridient(1, 3, "M","ביצים")],
   ["לשפוך את כל המרכיבים לקערה אחת", 
   "לערבב בצורה אחידה",
  " לטגן"]),
  new recipe(4, "קאפקייקס", "../../assets/image/capcaikes.jpg","קל", 2,  [new Ingridient(1, 3, "כוס","קמח"),
  new Ingridient(1, 1, "כוס"," חלב"),
  new Ingridient(1, 3, "M","ביצים")],
   ["לשפוך את כל המרכיבים לקערה אחת", 
   "לערבב בצורה אחידה",
"לאפות ב180 מעלות 20 דקות"])

  ]


  addRecipe(r: recipe) {
    if (recipe.length) {
      r.id = (this.recipeArr[this.recipeArr.length - 1].id as number + 1)
    }
    else {
      r.id = 1;
    }
    this.recipeArr.push(r);
  }
}
