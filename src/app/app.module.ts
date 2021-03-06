import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { AppRoutingModule } from './app-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';



@NgModule({
  imports:      [ BrowserModule,AppRoutingModule],
  declarations: [ AppComponent, EmployeesComponent, DepartmentsComponent, MenuHeaderComponent],
  bootstrap :[AppComponent]
})
export class AppModule { }
