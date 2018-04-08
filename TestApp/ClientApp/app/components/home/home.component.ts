import { Component, OnInit } from '@angular/core';
import { NavMenuService, MenuItem } from '../../services/nav-menu.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(
        private navMenuService: NavMenuService
    ) { }

    ngOnInit() {
        const menuItemList: MenuItem[] = [
            {
                name: 'Monster Library',
                routerLink: '/monster-library',
                class: 'glyphicon glyphicon-education'
            },
            {
                name: 'Fetch Data',
                routerLink: '/fetch-data',
                class: 'glyphicon glyphicon-th-list'
            }
        ];

        this.navMenuService.setNextItems('home', menuItemList);
    }
}
