import { Component, ContentChildren, AfterContentInit, QueryList, ElementRef } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tab-Group',
  templateUrl: 'tab.group.html',
  styleUrl: 'tab.group.scss'
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @ContentChildren('tabDiv', {read: ElementRef}) tabDivs!: QueryList<ElementRef>

  selected = 0;
  barHover = false;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(0);
    }
  }

  selectTab(index: number) {
    const divArray = this.tabDivs.toArray()
    const width = divArray[index].nativeElement.offsetWidth;
    this.selected = index;
    this.barHover = true;

    console.log(width)
  }

  mouseEnter(index: number){
    if (index === this.selected){
      this.barHover = true;
    }
  }
}
