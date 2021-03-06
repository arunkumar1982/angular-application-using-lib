import { Routes, RouterModule, Router } from '@angular/router';
import { ModuleWithProviders, NgModule } from "@angular/core";
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about/:id', component:AboutComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}