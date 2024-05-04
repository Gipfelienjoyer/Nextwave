import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { LoginPageComponent } from './login-page.component'; // Import your component

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  }
];

@NgModule({
  declarations: [LoginPageComponent],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'loginPage' }],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Import RouterModule.forChild and pass your routes
    TranslocoModule
  ]
})
export class LoginPageModuleModule {}
