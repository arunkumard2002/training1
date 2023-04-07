import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeePayload } from 'employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {

   }

   public getEmployeeList(): Observable<any>{
      return this.httpClient.get('https://dummy.restapiexample.com/api/v1/employees');
   }

   public saveEmployeeRecord(payLoad: EmployeePayload){
      debugger;
      return this.httpClient.post('https://dummy.restapiexample.com/api/v1/create', payLoad)
   }
}
