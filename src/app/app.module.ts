import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowLen } from './app.length';
import { ExistingCustomerpageComponent } from './existing-customerpage/existing-customerpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowLen,
    ExistingCustomerpageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
