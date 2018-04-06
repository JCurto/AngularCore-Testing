import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { NavMenuService } from '../navmenu/navmenu.service';

@Component({
    selector: 'monster-view',
    templateUrl: './monsterview.component.html',
    styleUrls: ['./monsterview.component.scss']
})
export class MonsterViewComponent implements OnInit, OnDestroy {

    private subscription: ISubscription;
    public monsterId: string | null;

    constructor(
        private route: ActivatedRoute,
        private navMenuService: NavMenuService
    ) { }

    ngOnInit() {
        /* For ActivatedRoute, the subscription doesn't technically need to be tracked and unsubscribed from.
         * However, it is good practice.
         */ 
        this.subscription =
            this.route.paramMap.subscribe((params: ParamMap) => this.monsterId = params.get('id'));

        this.navMenuService.setItems('monster');
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
