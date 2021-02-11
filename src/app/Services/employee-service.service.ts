import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
private baseUrl='http://localhost:50503/api/employee';
  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }
  getEmployeeById(id:number):Observable<Employee>{
return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }
  //getEmployeeById(id:number):Observable<Employee>{
   // return this.http.get<Employee>(`${this.baseUrl}/id`);
   addEmployee(employee:Employee):Observable<any>{
     return this.http.post(`${this.baseUrl}/save`,employee,{responseType: 'text'});
   }
   updateEmployee(id:number,employee:Employee):Observable<any>{
   return this.http.put(`${this.baseUrl}/update/${id}`,employee,{responseType: 'text'});
   }
   deleteEmployee(id:number):Observable<any>{
return this.http.delete(`${this.baseUrl}/remove/${id}` ,{responseType: 'text'});
   }
}
