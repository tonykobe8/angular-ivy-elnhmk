import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [{path:'' ,component: EmployeesComponent },
  { path:'employees', component: EmployeesComponent },
  { path:'departments',component:DepartmentsComponent  },
  {path :"projects" , component:ProjectsComponent }
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }