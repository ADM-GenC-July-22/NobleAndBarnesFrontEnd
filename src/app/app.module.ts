import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowLen } from './app.length';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ExistingCustomerpageComponent } from './existing-customerpage/existing-customerpage.component';
import { EntrypageComponent } from './entrypage/entrypage.component';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowLen,
    routingComponents,
    ExistingCustomerpageComponent,
    EntrypageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
