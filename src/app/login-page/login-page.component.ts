import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  logIn: boolean = true;



  indexHandler(number: number){
    this.logIn = number >= 1;
  }
}
