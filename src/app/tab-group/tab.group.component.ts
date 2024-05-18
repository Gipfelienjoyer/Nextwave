import {Component, ContentChildren, AfterContentInit, QueryList, ElementRef, ViewChild} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tab-Group',
  templateUrl: 'tab.group.html',
  styleUrl: 'tab.group.scss'
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @ViewChild('tabDiv') tabDivs!: QueryList<ElementRef>;
  selected = 0;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(0);
    }
  }

  selectTab(index: number) {
    this.selected = index;
  }
}
