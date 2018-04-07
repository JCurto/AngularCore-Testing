import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { FetchDataComponent } from './components/fetchdata/fetchdata.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
              { path: '', redirectTo: 'home', pathMatch: 'full' }
            , { path: 'home', component: HomeComponent }
            , { path: 'fetch-data', component: FetchDataComponent }
            , { path: '**', redirectTo: 'home' }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }