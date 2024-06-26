import {Component, HostBinding, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss' ]
})
export class AppComponent implements OnInit{

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle("Nextwave")
  }

  public isLightTheme = true;
  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }
}
