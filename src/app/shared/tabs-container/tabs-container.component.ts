import { Component, AfterContentInit, ContentChildren, QueryList  } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {

    @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>

    constructor() {}

    // ngOnInit(): void { // projected content has not initialized yet here
    //     console.log('tabs:', this.tabs);
    // }

    ngAfterContentInit(): void { // projected content has not initialized yet here
        console.log('tabs:', this.tabs?.length);
        const activeTabs = this.tabs?.filter(
            tab => tab.active
        )

        if (!activeTabs || activeTabs.length === 0) {
            this.selectTab(this.tabs!.first)
        }
    }

    selectTab(tab: TabComponent) {
        this.tabs?.forEach(tab => {
            tab.active = false
        })
        tab.active = true
        return false // preventing default behaviour which is adding # to the url after clicking a href
    }

}
