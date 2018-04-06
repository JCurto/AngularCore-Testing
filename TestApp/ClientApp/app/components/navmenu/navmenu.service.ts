import 'rxjs/add/observable/of';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavMenuService implements OnInit {
    private prevCategory: string;
    public $menuItems = new Subject<MenuItem[]>();

    constructor() { }

    public setItems(linkedCategory?: string): void {
        if (linkedCategory === undefined) {
            return;
        } else if (linkedCategory === this.prevCategory){
            return;
        } else if (linkedCategory === 'home') {
            this.setHomeItems();
            return;
        }

        switch (linkedCategory) {
            case 'monster': {
                this.$menuItems.next([
                    {
                        name: '<< Home',
                        routerLink: '/home',
                        class: 'glyphicon glyphicon-home'
                    },
                    {
                        name: 'Item 1',
                        routerLink: '/monster',
                        routerParams: 1,
                        class: 'glyphicon glyphicon-th-list'
                    },
                    {
                        name: 'Item 2',
                        routerLink: '/monster',
                        routerParams: 2,
                        class: 'glyphicon glyphicon-th-list'
                    },
                    {
                        name: 'Item 3',
                        routerLink: '/monster',
                        routerParams: 3,
                        class: 'glyphicon glyphicon-th-list'
                    }
                ]);
                this.prevCategory = 'monster';
                break;
            }

            default: {
                this.setHomeItems();
                break;
            }
        }
    }

    private setHomeItems() {
        this.$menuItems.next([
            {
                name: 'Monsters',
                routerLink: '/monster',
                class: 'glyphicon glyphicon-education'
            },
            {
                name: 'Fetch Data',
                routerLink: '/fetch-data',
                class: 'glyphicon glyphicon-th-list'
            }
        ]);
        this.prevCategory = 'home';
    }

    ngOnInit() {
        this.setHomeItems();
    }
}


export interface MenuItem {
    name: string;
    routerLink: string;
    routerParams?: any;
    class: string;
}