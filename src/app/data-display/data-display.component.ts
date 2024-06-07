import {Component, Input} from '@angular/core';

@Component({
  selector: 'DataDisplay',
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss'
})
export class DataDisplayComponent {
  @Input() data: any;
}
