import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewEmployeeComponent } from '../add-new-employee/add-new-employee.component';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(AddNewEmployeeComponent);
  }
}
