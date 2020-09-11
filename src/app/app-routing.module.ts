import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';


const appRoutes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path:"departments",component:DepartmentsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }