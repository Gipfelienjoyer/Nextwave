import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'Radio-Button',
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  @Input() name: string = "";
  @Input() value: any;
  @Input() selected: boolean = false;
  @Input() single = false;
  @Output() selectedChange = new EventEmitter<any>();

  selectRadio() {
    if (this.single) {
      this.selected = !this.selected
    }
    else if(!this.selected) {
      this.selected = true;
    }

    this.selectedChange.emit(this.selected ? this.value : null)
  }

  onRadioChange(event: Event) {
    event.stopPropagation();
  }
}
