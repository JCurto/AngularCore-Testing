import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonsterLibraryHomeComponent } from './monster-library-home.component';
import { MonsterLibraryComponent } from './monster-library.component';
import { MonsterDetailComponent } from './monster-detail.component';

const monsterLibraryRoutes: Routes = [
    {
        path: 'monster-library',
        component: MonsterLibraryComponent,
        children: [
            {
                path: '',
                component: MonsterLibraryHomeComponent
            },
            {
                path: ':id',
                component: MonsterDetailComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(monsterLibraryRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MonsterLibraryRoutingModule { }