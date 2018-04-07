import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    template: '{{monsterId}}'
})
export class MonsterDetailComponent implements OnInit, OnDestroy {

    private subscription: ISubscription;
    public monsterId: string | null;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        /* For ActivatedRoute, the subscription doesn't technically need to be tracked and unsubscribed from.
         * However, it is good practice.
         */
        this.subscription =
            this.route.paramMap.subscribe((params: ParamMap) => this.monsterId = params.get('id'));
        console.log('Detail OnInit');
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}