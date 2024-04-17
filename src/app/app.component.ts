import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss' ]
})
export class AppComponent {
  title = 'PersonalPortfolio';
  public isLightTheme = true;
  inputValues: string[] = [];
  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }

  setValue(value: string) {
    this.inputValues.push(value);
  }


}
