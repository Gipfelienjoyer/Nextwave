import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {url} from "node:inspector";

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {
  @Input() PlaceholderText: string = "";
  @Input({transform: booleanAttribute}) password: boolean = false;
  @Output() inputValue: EventEmitter<string> = new EventEmitter<string>();
  value: string = "";
  pwVisible: boolean = false;
  valid: boolean = false;
  svgColor: string = 'var(--MainDefault)';
}
