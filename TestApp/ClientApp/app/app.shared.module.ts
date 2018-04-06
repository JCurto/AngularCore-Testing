import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { NavMenuService } from './components/navmenu/navmenu.service';
import { HomeComponent } from './components/home/home.component';
import { MonsterViewComponent } from './components/monsterview/monsterview.component';

import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
    declarations: [
          AppComponent
        , NavMenuComponent
        , HomeComponent
        , MonsterViewComponent

        , CounterComponent
        , FetchDataComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
              { path: '', redirectTo: 'home', pathMatch: 'full' }
            , { path: 'home', component: HomeComponent }
            , { path: 'monster', component: MonsterViewComponent }
            , { path: 'monster/:id', component: MonsterViewComponent }
            , { path: 'counter', component: CounterComponent }
            , { path: 'fetch-data', component: FetchDataComponent }
            , { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        NavMenuService
    ]
})
export class AppModuleShared {
}
