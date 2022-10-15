import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';



@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeDetailComponent,
    AddNewEmployeeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmployeeRoutingModule

  ]
})
export class EmployeesModule { }
