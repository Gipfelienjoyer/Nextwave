import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tab',
  template: `
    <div *ngIf="active" style="width: 100%; display: flex; height: 100%;" >
      <ng-content></ng-content>
    </div>
  `,
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ],
  styles: [`
  `]
})
export class TabComponent {
  @Input() label!: string;
  active = false;
}
