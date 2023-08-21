import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDTO } from '../types/students-view.types';

const STUDENT_API = 'http://localhost:8080/api/v1/student';

@Injectable()
export class StudentsViewService {

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<StudentDTO[]> {
    return <Observable<StudentDTO[]>>this.http.get(STUDENT_API);
  }
}
