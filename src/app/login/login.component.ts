import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private recipeService: RecipesService) {
    this.users = this.recipeService.userArr;
  }
  users: User[] = [];
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      const usernameValue = this.form.get('username')?.value;
      const passwordValue = this.form.get('password')?.value;
      console.log(usernameValue);
      console.log(passwordValue);
      let flagTemp= false;
      for (let i = 0; i < this.users.length;i++ ) {
        if (
          usernameValue == this.users[i].name &&
          passwordValue == this.users[i].password
        ) {
          flagTemp=true
        }
      }
      if(flagTemp==false){
      this.flag = true;
      this.error = 'אופס, הסיסמה או שם המשתמש שגוי'; }
      else this.submitEM.emit(this.form.value);
    }
  }
  flag: boolean = false;
  @Input() error: string | null = '';

  @Output() submitEM = new EventEmitter();
}
// username: string = '';
// password: string = '';
// show: boolean = false;
// submit() {
//   console.log('user name is ' + this.username);
//   this.clear();
// }
// clear() {
//   this.username = '';
//   this.password = '';
//   this.show = true;
// }
