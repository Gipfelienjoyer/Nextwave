import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() links: { [key: string]: string } = {};

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  getLinks() {
    return Object.keys(this.links).map(key => ({
      name: key,
      path: this.links[key]
    }));
  }
}
