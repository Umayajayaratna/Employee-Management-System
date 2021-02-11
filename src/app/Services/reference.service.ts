import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReferenceType } from '../Models/referenceType';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from '../Models/employee';
@Injectable({
  providedIn: 'root'
})
export class ReferenceService {
  private baseUrlRef='http://localhost:50503/api/employeereference';
  constructor(private http:HttpClient) { }

getAllReferences():Observable<ReferenceType[]>{
 return this.http.get<ReferenceType[]>(this.baseUrlRef);
 
}
/*getAllReferencesdes():Observable<Reference[]>{
  return this.http.get<Reference[]>(this.baseUrlRef).pipe(map((Reference) => Reference.description),
  tap(Reference => console.log("users array",Reference)));
 }*/
 addReference(reference:ReferenceType):Observable<any>{
   return this.http.post(`${this.baseUrlRef}/save`,reference,{responseType: 'text'});
 }
 updateReference(id:number,reference:ReferenceType):Observable<any>{
   return this.http.put(`${this.baseUrlRef}/update/${id}`,reference,{responseType: 'text'});
 }
 removeReference(id:number):Observable<any>{
   return this.http.delete(`${this.baseUrlRef}/remove/${id}`,{responseType: 'text'});
 }
 getReferenceById(id:number):Observable<ReferenceType>{
   return this.http.get<ReferenceType>(`${this.baseUrlRef}/${id}`);
 }
}
