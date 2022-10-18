import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeServiceService } from 'src/app/service/employee.service';
import { AddNewEmployeeComponent } from '../add-new-employee/add-new-employee.component';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  public employees =  [];
  constructor(private dialog : MatDialog,private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeService.getEmployeeData()
    .subscribe(data => this.employees = data);
  }
  openDialog(){
    this.dialog.open(AddNewEmployeeComponent);
  }
}
