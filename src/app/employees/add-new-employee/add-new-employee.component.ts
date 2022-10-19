import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.scss']
})
export class AddNewEmployeeComponent implements OnInit {
  addEmployeesFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient
    ) {

    this.addEmployeesFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      employeeNumber: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      maritalStatus: ['', Validators.required],

    });

   }

  ngOnInit(): void {
  }

  employees() {
    let data = {
      name: this.addEmployeesFormGroup.value.name,
      email: this.addEmployeesFormGroup.value.email,
      role: this.addEmployeesFormGroup.value.role,
      employeeNumber: this.addEmployeesFormGroup.value.employeeNumber,
      address: this.addEmployeesFormGroup.value.address,
      phone: this.addEmployeesFormGroup.value.phone,
      maritalStatus: this.addEmployeesFormGroup.value.maritalStatus,
    };
    return data;
  }

  saveEmployees(){
    let data = this.employees();
    this.http.post('http://localhost:9191/addEmployee', data).subscribe(
      (response) => console.log(response),
      (error) => console.log(error))
}
}
