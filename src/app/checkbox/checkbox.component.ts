import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input() checked = false;
  @Input() label: string = '';
  @Input() disabled = false;
  strokeWidth = 400;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggleChecked() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
      console.log(this.checked)
    }
  }

  onCheckboxChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.checkedChange.emit(this.checked);
  }
}
