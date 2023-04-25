import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL ="http://localhost:8080/api/students";

  private options = {
    headers: new HttpHeaders({
       'Accept':'*'
    })
 }

  constructor(private httpClient: HttpClient) { }

  getStudentsList() : Observable<Student[]> {
    return this.httpClient.get<Student[]> (`${this.baseURL}`);
  }

  addStudent(student: Student) : Observable<Object>{
    console.log(this.httpClient.post<Object>(`${this.baseURL}`,student));
    
    return this.httpClient.post<Object>(`${this.baseURL}`,student);
  }

  getStudentById(id: number) : Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Object> {
    return this.httpClient.put<Object>(`${this.baseURL}/${id}`,student);
  }

  deleteStudent(studId: number) : Observable<any> {
    return this.httpClient.delete<any>(`${this.baseURL}/${studId}`, this.options);
  }
}
