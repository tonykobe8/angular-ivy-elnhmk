import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  imports:      [ BrowserModule,AppRoutingModule],
  declarations: [ AppComponent,EmployeeComponent],
  bootstrap :[AppComponent]
})
export class AppModule { }
