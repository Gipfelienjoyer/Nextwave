import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from "../tab/tab.component";

@Component({
  selector: 'app-tab-group',
  templateUrl: 'tab.group.html',
  styleUrl: 'tab.group.scss'
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(tab => tab.active = false);
    tab.active = true;
  }

  tabClicked(clickedTab: TabComponent) {
    this.tabs.forEach(tab => {
      tab.active = tab === clickedTab;
    });
  }
}
