import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';


const appRoutes: Routes = [{path:'' ,component: EmployeesComponent },
  { path:'employees', component: EmployeesComponent },
  { path:'departments',component:DepartmentsComponent  }
  
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }