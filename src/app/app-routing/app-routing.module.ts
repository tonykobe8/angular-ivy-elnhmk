import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';


import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';

const appRoutes: Routes = [
{ path:"employee" ,component: EmployeeComponent },
{ path:"department",component: DepartmentComponent }]; 
@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }