import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../navmenu/navmenu.service';

@Component({
    template: `
        <h2>Monster Library</h2>
        <router-outlet></router-outlet>
    `
})
export class MonsterLibraryComponent implements OnInit {

    constructor(
        private navMenuService: NavMenuService
    ) { }

    ngOnInit() {
        this.navMenuService.setItems('monster-library');
    }

}