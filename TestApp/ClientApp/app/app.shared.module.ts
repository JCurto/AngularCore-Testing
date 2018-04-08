import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';

import { AppRoutingModule } from './app-routing.module';
import { MonsterLibraryModule } from './components/monster-library/monster-library.module'

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';

import { FetchDataComponent } from './components/fetchdata/fetchdata.component';

import { NavMenuService } from './services/nav-menu.service';

@NgModule({
    declarations: [
          AppComponent
        , NavMenuComponent
        , HomeComponent

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
