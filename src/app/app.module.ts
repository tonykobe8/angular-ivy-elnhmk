import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  imports:      [ BrowserModule,AppRoutingModule  ],
  declarations: [ EmployeeComponent],
  bootstrap :[AppComponent]
})
export class AppModule { }
