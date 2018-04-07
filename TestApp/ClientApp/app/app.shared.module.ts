import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';

import { AppRoutingModule } from './app-routing.module';
import { MonsterLibraryModule } from './components/monster-library/monster-library.module'

import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { NavMenuService } from './components/navmenu/navmenu.service';
import { HomeComponent } from './components/home/home.component';

import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
    declarations: [
          AppComponent
        , NavMenuComponent
        , HomeComponent

        , CounterComponent
        , FetchDataComponent
    ],
    imports: [
          CommonModule
        , HttpModule
        , FormsModule

        , MonsterLibraryModule

        , AppRoutingModule
    ],
    providers: [
        NavMenuService
    ]
})
export class AppModuleShared {
}
