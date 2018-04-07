import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { NavMenuService } from './components/navmenu/navmenu.service';
import { HomeComponent } from './components/home/home.component';

import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
              { path: '', redirectTo: 'home', pathMatch: 'full' }
            , { path: 'home', component: HomeComponent }
            , { path: 'counter', component: CounterComponent }
            , { path: 'fetch-data', component: FetchDataComponent }
            , { path: '**', redirectTo: 'home' }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }