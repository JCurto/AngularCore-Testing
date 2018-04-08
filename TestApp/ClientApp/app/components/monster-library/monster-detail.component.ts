import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './monster-detail.component.html',
    styleUrls: ['./monster-detail.component.scss']
})
export class MonsterDetailComponent implements OnInit, OnDestroy {

    private subscription: ISubscription;
    public monsterId: string | null;
    public monsterDetails: MonsterDetail[];

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        @Inject('BASE_URL') private baseUrl: string
    ) { }

    ngOnInit() {
        /* For ActivatedRoute, the subscription doesn't technically need to be tracked and unsubscribed from.
         * However, it is good practice.
         */
        this.subscription =
            this.route.paramMap.subscribe((params: ParamMap) => {
                this.http.get(this.baseUrl + 'api/MonsterData/' + params.get('id')).subscribe(result => {
                    this.monsterDetails = [result.json() as MonsterDetail];
                })
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}


interface MonsterDetail {
    id: string
    , name: string
    , race: string
    , class: string
    , stats: MonsterLevel[]
}

interface MonsterLevel {
    level: number
    , normal: MonsterStats
    , elite: MonsterStats
}

interface MonsterStats {
    health: number
    , move: number
    , attack: number
    , range: number
    , attributes: string[]
}