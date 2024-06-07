import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent} from "./login-page/login-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InputFieldComponent } from './input-field/input-field.component';
import { NgOptimizedImage } from "@angular/common";
import {HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';
import { TabGroupComponent } from './tab-group/tab.group.component';
import { TabComponent } from './tab-group/tab.component';
import {TabsModule} from "ngx-bootstrap/tabs";
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {TooltipModule} from "ngx-bootstrap/tooltip";
import { DataDisplayComponent } from './data-display/data-display.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InputFieldComponent,
    TabGroupComponent,
    TabComponent,
    CheckboxComponent,
    ButtonComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    DataDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
    HttpClientModule,
    TabsModule,
    ReactiveFormsModule,
    TooltipModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
