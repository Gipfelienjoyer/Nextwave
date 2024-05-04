import { Component, HostBinding } from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss' ]
})
export class AppComponent {
  title = 'PersonalPortfolio';
  public isLightTheme = true;
  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }
  testArray: string[] = ['Test', 'ddd', 'dkjalsdjflj']

  constructor(private translocoService: TranslocoService) {}
  public languagesList:
    Array<Record<'imgUrl' | 'code' | 'name' | 'shorthand', string>> = [
    {
      imgUrl: '/assets/images/English.png',
      code: 'en',
      name: 'English',
      shorthand: 'ENG',
    },
    {
      imgUrl: '/assets/images/Deutsch.png',
      code: 'de',
      name: 'German',
      shorthand: 'GER',
    },
    {
      imgUrl: '/assets/images/Persian.png',
      code: 'fa',
      name: 'Persian',
      shorthand: 'PER',
    },
  ];
  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
    languageCode === 'fa'
      ? (document.body.style.direction = 'rtl')
      : (document.body.style.direction = 'ltr');
  }

}
