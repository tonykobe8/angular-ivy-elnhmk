import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { HelloComponent } from './hello.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  imports:      [ BrowserModule,AppRoutingModule  ],
  declarations: [ ]

})
export class AppModule { }
