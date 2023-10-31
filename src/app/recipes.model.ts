export class recipe {
  constructor(
    public id?:number,
  public name?: string,
  public level?: string,
  public during?: number,
  public products?: Ingridient[],
  public instructions?: string[]){}

}

export class Ingridient {
  constructor( public id?:number, public count?:number, public kind?:string,
  public name?: string){}

}