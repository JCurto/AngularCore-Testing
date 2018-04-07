import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './monster-detail.component.html',
    styleUrls: ['./monster-detail.component.scss']
})
export class MonsterDetailComponent implements OnInit, OnDestroy {

    private subscription: ISubscription;
    public monsterId: string | null;
    public monsters: MonsterDetail[];

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        /* For ActivatedRoute, the subscription doesn't technically need to be tracked and unsubscribed from.
         * However, it is good practice.
         */
        this.subscription =
            this.route.paramMap.subscribe((params: ParamMap) => this.monsters = [{ name: 'Argla', id: params.get('id') }]);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

interface MonsterDetail {
    name: string,
    id: string | null
}