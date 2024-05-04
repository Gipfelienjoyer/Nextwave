import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-option-switch',
  templateUrl: './option-switch.component.html',
  styleUrls: ['./option-switch.component.scss']
})
export class OptionSwitchComponent implements OnInit {
  @Input() optionsArray: string[] = ['Option1', 'asfsaddd', 'jölsajdflkajsdlkajsdlkfjsa', 'jkjsjfaksjdflsafjas'];
  @Input() defaultOption: string = "0";
  @Input() fontSize: number = 18;
  @Input() fontColor: string = 'var(--MainDefault)';
  @Input() lineColor: string = "";
  @ViewChild('Options', {static: true})
  defaultOptionIndex: number = 0;
  selected: number = 0;
  width: number = 10;
  offset: number = 0;
  barHigh: boolean = true;
  top: number = 27;

  ngOnInit() {
    if (this.lineColor === "") {
      this.lineColor = this.fontColor;
    }

    this.defaultOptionIndex = parseInt(this.defaultOption)
    this.barAutoPosition(this.defaultOptionIndex)
  }

  barAutoPosition(index: number) {
    const options = document.getElementsByClassName('optionSwitchOptions')[0].children as HTMLCollectionOf<HTMLElement>;
    const parentElement = document.getElementsByClassName('optionSwitchOptions');

    const targetElement = options[index];
    const option = options[this.selected];

    option.style.fontWeight = 'Normal';
    targetElement.style.fontWeight = '550';

    const targetRect = targetElement.getBoundingClientRect();
    const parentRect = parentElement;

    const width = targetRect.width.toFixed(2);

    this.selected = index;
    this.width = parseFloat(width) - 8;
    //this.offset = parseFloat(offset.toFixed(2)) + 3;
  }


  mouseEnter(index: number) {
    if (index === this.selected) {
      this.barHigh = true;
    }
  }
}
