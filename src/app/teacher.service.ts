import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseURL ="http://localhost:8080/api/teachers";

  private options = {
    headers: new HttpHeaders({
       'Accept':'*'
    })
 }

  constructor(private httpClient: HttpClient) { }

  getTeachersList() : Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]> (`${this.baseURL}`);
  }

  addTeacher(teacher: Teacher) : Observable<Object>{
    console.log(this.httpClient.post<Object>(`${this.baseURL}`,teacher));
    
    return this.httpClient.post<Object>(`${this.baseURL}`,teacher);
  }

  getTeacherById(id: number) : Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  }

  updateTeacher(id: number, teacher: Teacher): Observable<Object> {
    return this.httpClient.put<Object>(`${this.baseURL}/${id}`,teacher);
  }

  deleteTeacher(teacherId: number) : Observable<any> {
    return this.httpClient.delete<any>(`${this.baseURL}/${teacherId}`, this.options);
  }

}
