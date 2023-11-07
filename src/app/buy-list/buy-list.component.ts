import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.css']
})
export class BuyListComponent {

  constructor(private service:RecipesService ){ 
  }
  products:any[]=[];
  ngOnInit() {
    let user=localStorage.getItem('user')||"";
    const usrId = JSON.parse(user).id;
    const index = this.service.userArr.findIndex(u=>u.id==usrId);
    this.products= this.service.userArr[index].shoppingList;
  }
}
