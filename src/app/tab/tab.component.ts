import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabComponent {
  @Input('tabTitle') title: string = "";
  @Input() active = false;
  @Output() tabClicked = new EventEmitter<void>();

  onClick() {
    this.tabClicked.emit();
  }
}
