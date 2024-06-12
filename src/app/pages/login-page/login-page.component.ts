import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../buttons/button/button.component'
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  logIn: boolean = true;

  loginForm = new FormGroup({
    logInEmailInput: new FormControl(''),
    logInPassword: new FormControl(''),
    logInCheckbox: new FormControl('')
  })


  indexHandler(number: number){
    this.logIn = number >= 1;
  }

  onSubmit(){
    console.warn(this.loginForm.value)
  }
}
