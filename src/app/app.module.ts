import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule} from "@angular/forms";
import { InputFieldComponent } from './input-field/input-field.component';
import {NgOptimizedImage} from "@angular/common";
import {OptionSwitchComponent} from './option-switch/option-switch.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module'
import {TranslocoModule} from "@ngneat/transloco";
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InputFieldComponent,
    OptionSwitchComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgOptimizedImage,
        HttpClientModule,
        TranslocoModule
    ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
