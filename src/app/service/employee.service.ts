import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../models/employee';
import { Observable } from 'rxjs';
@Injectable()
export class EmployeeServiceService {


   private _baseUrl : string = "/assets/data/employees.json";


  constructor(private http : HttpClient) { }


  getEmployeeData():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._baseUrl);
  }
}
