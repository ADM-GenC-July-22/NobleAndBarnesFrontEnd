import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { EntrypageComponent } from './entrypage/entrypage.component';
import { ExistingCustomerpageComponent } from './existing-customerpage/existing-customerpage.component';
import { HomeComponent } from './home/home.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes =[
    {path: 'home', component: HomeComponent},
    { path: 'shopping', component:ShoppingComponent},
    {path:'updateCustomer', component:ShoppingComponent},
    {path:'existingCustomer', component:ExistingCustomerpageComponent},
    {path:'',component:EntrypageComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [HomeComponent,ShoppingComponent,ExistingCustomerpageComponent,EntrypageComponent];