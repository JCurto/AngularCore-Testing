import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../navmenu/navmenu.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(
        private navMenuService: NavMenuService
    ) { }

    ngOnInit() {
        this.navMenuService.setItems('home');
    }
}
