import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../../services/nav-menu.service';

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
