import { Component } from '@angular/core';

@Component({
  selector: 'buttonC',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  scale: string = 'scale(1)';
  clicked: boolean = false;

  enter() {
    if (!this.clicked) {
      this.scale = 'scale(1.05)';
    }
  }

  click() {
    this.clicked = true;
    this.scale = 'scale(0.7)';

    setTimeout(() => {
      this.scale = 'scale(1)';
      this.clicked = false;
    }, 200);
  }

  leave() {
    if (!this.clicked) {
      this.scale = 'scale(1)';
    }
  }
}
