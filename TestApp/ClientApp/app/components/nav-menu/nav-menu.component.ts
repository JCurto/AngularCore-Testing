import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavMenuService, MenuItem } from '../../services/nav-menu.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit, OnDestroy {
    public menuItems: MenuItem[];
    private navMenuSubscription: Subscription;

    constructor(
        private navMenuService: NavMenuService
    ) {

    }

    ngOnInit() {
        this.navMenuSubscription = this.navMenuService.$menuItems.subscribe((items: MenuItem[]) => {
            this.menuItems = items;
        })
    }

    ngOnDestroy() {
        if (this.navMenuSubscription) {
            this.navMenuSubscription.unsubscribe();
        }
    }
}
