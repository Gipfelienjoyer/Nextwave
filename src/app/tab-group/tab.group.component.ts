import { Component, ContentChildren, AfterContentInit, QueryList, ElementRef, ViewChildren, ViewChild, Renderer2, Input } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tab-group',
  templateUrl: 'tab.group.html',
  styleUrls: ['tab.group.scss']
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @ViewChildren('tabDiv') tabDivs!: QueryList<ElementRef>;
  @ViewChild('tabGroupBar') tabGroupBar!: ElementRef;
  @Input() defaultSelectedIndex: number = 0;
  selected = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterContentInit() {
    const activeTabs = this.tabs?.filter(tab => tab.active);
    if (!activeTabs?.length) {
      this.selectTab(this.defaultSelectedIndex);
    } else {
      this.selected = this.tabs.toArray().findIndex(tab => tab.active);
      this.updateBarPosition();
    }
  }

  selectTab(index: number, event?: MouseEvent) {
    this.selected = index;

    this.tabs.forEach((tab, i) => {
      tab.active = i === index;
    });

    const tabDiv = this.tabDivs.toArray()[index].nativeElement;
    const barDiv = this.tabGroupBar.nativeElement;
    const tabDivRect = tabDiv.getBoundingClientRect();

    this.renderer.setStyle(barDiv, 'width', `${tabDivRect.width}px`);
    this.renderer.setStyle(barDiv, 'transform', `translateX(${tabDiv.offsetLeft}px)`);
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
