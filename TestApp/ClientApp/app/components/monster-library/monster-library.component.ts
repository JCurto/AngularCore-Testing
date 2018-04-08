import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { NavMenuService, MenuItem } from '../../services/nav-menu.service';

@Component({
    template: `
        <h2>Monster Library</h2>
        <router-outlet></router-outlet>
    `
})
export class MonsterLibraryComponent implements OnInit {
    private monsterList: MonsterListItem[];
    private menuItemList: MenuItem[];

    constructor(
        private http: Http,
        private navMenuService: NavMenuService,
        @Inject('BASE_URL') private baseUrl: string
    ) { }
    
    ngOnInit() {
        this.http.get(this.baseUrl + 'api/MonsterData').subscribe(result => {
            this.monsterList = result.json() as MonsterListItem[];
            this.menuItemList = this.monsterList.map(this.mapList);

            this.navMenuService.setNextItems('monster-library', this.menuItemList, 'home', 'Home');
        }, error => console.error(error));
    }

    private mapList(listItem: MonsterListItem): MenuItem {
        const menuItem: MenuItem = {
            routerLink: '/monster-library',
            name: listItem.name,
            class: 'glyphicon glyphicon-th-list',
            routerParams: listItem.id
        };

        return menuItem;
    }
}


interface MonsterListItem {
    id: string,
    name: string
}
