import {booleanAttribute, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {url} from "node:inspector";

@Component({
  selector: 'inputField',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent implements OnInit{
  @Input({transform: booleanAttribute}) password: boolean = false;
  @Output() inputValue: EventEmitter<string> = new EventEmitter<string>();
  value: string = "";
  pwVisible: boolean = false;
  valid: boolean = false;
  ngOnInit() {
    if (!this.password){
      this.pwVisible = true;
      console.log(this.pwVisible)
    }
  }
}

