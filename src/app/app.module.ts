import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent} from "./pages/login-page/login-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InputFieldComponent } from './components/input-field/input-field.component';
import {CommonModule, DatePipe, NgOptimizedImage} from "@angular/common";
import {HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';
import { TabGroupComponent } from './components/tab-group/tab.group.component';
import { TabComponent } from './components/tab-group/tab.component';
import {TabsModule} from "ngx-bootstrap/tabs";
import { CheckboxComponent } from './buttons/checkbox/checkbox.component';
import { ButtonComponent } from './buttons/button/button.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {TooltipModule} from "ngx-bootstrap/tooltip";
import { DataDisplayComponent } from './data-display/data-display.component';
import {DataService} from "./data.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatRadioButton} from "@angular/material/radio";
import { RadioButtonComponent } from './buttons/radio-button/radio-button.component';

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
    RadioButtonComponent,
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
        CommonModule,
        MatGridList,
        MatGridTile,
        MatRadioButton
    ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    ),
    DataService,
    DatePipe,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
