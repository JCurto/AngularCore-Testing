import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MonsterLibraryComponent } from './monster-library.component';
import { MonsterLibraryHomeComponent } from './monster-library-home.component';
import { MonsterDetailComponent } from './monster-detail.component';

import { MonsterLibraryRoutingModule } from './monster-library-routing.module';

@NgModule({
    imports: [
        CommonModule
      , HttpModule
      , MonsterLibraryRoutingModule
    ],
    declarations: [
        MonsterLibraryComponent
      , MonsterLibraryHomeComponent
      , MonsterDetailComponent
    ]
})
export class MonsterLibraryModule { }