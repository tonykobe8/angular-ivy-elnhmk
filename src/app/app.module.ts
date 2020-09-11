import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { DepartmentComponent } from './department/department.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  imports:      [ BrowserModule,AppRoutingModule],
  declarations: [ AppComponent, DepartmentComponent],
  bootstrap :[AppComponent]
})
export class AppModule { }
