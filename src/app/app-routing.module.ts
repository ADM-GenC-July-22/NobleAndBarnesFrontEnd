import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes =[
    {path: 'home', component: HomeComponent},
    { path: 'shopping', component:ShoppingComponent},
    {path:'updateCustomer', component:ShoppingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [HomeComponent,ShoppingComponent];