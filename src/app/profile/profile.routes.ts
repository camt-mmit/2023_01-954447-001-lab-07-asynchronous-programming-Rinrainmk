import { Component } from '@angular/core';
import { Routes } from "@angular/router";

import { ProfileViewComponent } from "./profile-view/profile-view.component";
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

export const routes: Routes = [
    {
        path:'',
        component: ProfilePageComponent,
        children: [
            {path: '', redirectTo: 'view', pathMatch: 'full' },
            {path: 'view' , component:ProfileViewComponent},
        ]
    }
]