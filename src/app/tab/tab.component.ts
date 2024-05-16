import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div #tabContent *ngIf="active">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class TabComponent {
  @Input() label!: string;
  active = false;
}
