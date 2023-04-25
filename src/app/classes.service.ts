import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classes } from './classes';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  private baseURL ="http://localhost:8080/api/classes";

  private options = {
    headers: new HttpHeaders({
       'Accept':'*'
    })
 }
  constructor(private httpClient: HttpClient) { }

  getClassesList() : Observable<Classes[]> {
    return this.httpClient.get<Classes[]> (`${this.baseURL}`);
  }

  addClass(classes: Classes) : Observable<Object>{
    console.log(this.httpClient.post<Object>(`${this.baseURL}`,classes));
    
    return this.httpClient.post<Object>(`${this.baseURL}`,classes);
  }

  getClassById(id: number) : Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  }

  updateClass(id: number, classes: Classes): Observable<Object> {
    return this.httpClient.put<Object>(`${this.baseURL}/${id}`,classes);
  }

  deleteClass(classId: number) : Observable<any> {
    return this.httpClient.delete<any>(`${this.baseURL}/${classId}`, this.options);
  }
}
