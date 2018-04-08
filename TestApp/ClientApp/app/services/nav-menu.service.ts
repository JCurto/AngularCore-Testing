import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavMenuService {
    private prevCategory: string;
    public $menuItems = new Subject<MenuItem[]>();

    constructor() { }

    public setNextItems(nextCategory: string, nextItems: MenuItem[], backCategory?: string, backCategoryName?: string): void {
        if (nextCategory === undefined) {
            return;
        } else if (nextCategory === this.prevCategory) {
            return;
        }

        if (backCategory !== undefined) {
            const backRoute: MenuItem = {
                name: '' + backCategoryName,
                routerLink: '/' + backCategory,
                class: 'glyphicon glyphicon-arrow-left'
            };

            nextItems.unshift(backRoute);
        }
        
        this.$menuItems.next(nextItems);
        this.prevCategory = nextCategory;
    }
}


export interface MenuItem {
    name: string;
    routerLink: string;
    routerParams?: any;
    class: string;
}