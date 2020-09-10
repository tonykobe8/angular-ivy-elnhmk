import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { RouterModule ,Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

const appRoutes: Routes = [{ path:'employee', component: EmployeeComponent }];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

