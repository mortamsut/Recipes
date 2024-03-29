export class recipe {
  constructor(
  public id?:number,
  public name?: string,
  public image?: string,
  public level?: string,
  public during?: number,
  public products?: Ingridient[],
  public instructions?: Instructions[],
  public userId?: number){}

}

export class Ingridient {
  constructor( public id?:number,
     public count?:number,
      public kind?:string,
  public name?: string){}
}
export class Instructions {
  constructor( public instruction?:string,
   ){}
}
export class IngridientToBuy {
  constructor( public id?:number,
     public count?:number,
      public kind?:string,
  public name?: string,
  public need?:boolean){}

}
// משתנה לקוח:
// מזהה לקוח, שם הלקוח, טלפון, דרך ליצירת קשר, סיסמה,
// מערך של מזהה מתכונים, מערך של רשימת קניות.

export class User{
  constructor(
    public id:number,
    public name:string,
    public phone:string,
    public password:string,
    public idRecipes:number[],
    public shoppingList:IngridientToBuy[]
  ){}
}