import {Component, EventEmitter, Input, output, Output} from '@angular/core';

@Component({
  selector: 'buttonC',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  scale: string = 'scale(1)';
  clicked: boolean = false;
  hover = false;
  @Input() disabled = false;
  @Input() type = "button";
  @Output() output = new EventEmitter<void>();

  enter() {
    if (!this.clicked && !this.disabled) {
      this.scale = 'scale(1.05)';
      this.hover = true;
    }
  }

  click() {
    this.clicked = true;
    this.scale = 'scale(0.7)';

    setTimeout(() => {
      this.scale = 'scale(1)';
      this.clicked = false;
    }, 200);

    if (!this.disabled) {
      this.output.emit();
    }
  }

  leave() {
    if (!this.clicked) {
      this.scale = 'scale(1)';

    }
    this.hover = false;
  }
}
