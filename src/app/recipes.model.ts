export class recipe {
  constructor(
    public id?:number,
  public name?: string,
  public image?: any,
  public level?: string,
  public during?: number,
  public products?: Ingridient[],
  public instructions?: string[],
  public userId?: number){}

}

export class Ingridient {
  constructor( public id?:number,
     public count?:number,
      public kind?:string,
  public name?: string){}
}

export class IngridientToBuy {
  constructor( public id?:number,
     public count?:number,
      public kind?:string,
  public name?: string,
  public inHome?:boolean){}

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
    public idRecipes:string[],
    public shoppingList:IngridientToBuy[]
  ){}
}