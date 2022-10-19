import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../models/employee';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class EmployeeServiceService {


   private _baseUrl : string = "http://localhost:9191/employees";


  constructor(private http : HttpClient) { }


  getEmployeeData():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._baseUrl);
  }
}
