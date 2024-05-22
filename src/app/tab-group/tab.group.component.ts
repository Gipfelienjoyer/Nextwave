import { Component, ContentChildren, AfterContentInit, AfterViewInit, QueryList, ElementRef, ViewChildren, ViewChild, Renderer2, Input, ChangeDetectorRef } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tab-group',
  templateUrl: 'tab.group.html',
  styleUrls: ['tab.group.scss']
})
export class TabGroupComponent implements AfterContentInit, AfterViewInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @ViewChildren('tabDiv') tabDivs!: QueryList<ElementRef>;
  @ViewChild('tabGroupBar') tabGroupBar!: ElementRef;
  @Input() default: number = 1;
  selected = 0;

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.selectTab(this.default);
  }

  ngAfterViewInit() {
    this.setTransition("none")
    this.updateBarPosition();
    this.cdr.detectChanges();

    setTimeout(() => {
      this.setTransition('400ms ease')
    }, 0);
  }

  private setTransition (transitionValue: string) {
    this.renderer.setStyle(this.tabGroupBar.nativeElement, 'transition', transitionValue)
  }

  selectTab(index: number) {
    this.selected = index;

    this.tabs.forEach((tab, i) => {
      tab.active = i === index;
    });

    if (this.tabDivs && this.tabDivs.length > 0 && this.selected >= 0) {
      const tabDiv = this.tabDivs.toArray()[index].nativeElement;
      const barDiv = this.tabGroupBar.nativeElement;
      const tabDivRect = tabDiv.getBoundingClientRect();

      this.renderer.setStyle(barDiv, 'width', `${tabDivRect.width}px`);
      this.renderer.setStyle(barDiv, 'transform', `translateX(${tabDiv.offsetLeft}px)`);
    }
  }

  updateBarPosition() {
    if (this.tabDivs && this.tabDivs.length > 0 && this.selected >= 0) {
      const tabDiv = this.tabDivs.toArray()[this.selected].nativeElement;
      const barDiv = this.tabGroupBar.nativeElement;
      const tabDivRect = tabDiv.getBoundingClientRect();
      this.renderer.setStyle(barDiv, 'width', `${tabDivRect.width}px`);
      this.renderer.setStyle(barDiv, 'transform', `translateX(${tabDiv.offsetLeft}px)`);
    }
  }
}
