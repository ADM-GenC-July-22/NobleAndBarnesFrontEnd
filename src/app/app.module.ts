import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ShowLen } from './app.length';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ExistingCustomerpageComponent } from './existing-customerpage/existing-customerpage.component';
import { EntrypageComponent } from './entrypage/entrypage.component';
import { CustomerService } from './customer.service';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowLen,
    routingComponents,
    ExistingCustomerpageComponent,
    EntrypageComponent,
    RegisterCustomerComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
