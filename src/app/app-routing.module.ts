import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';


import { EmployeeComponent } from './employee/employee.component';


const appRoutes: Routes = [{path :'employee' ,component:EmployeeComponent}]; 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }