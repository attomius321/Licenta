import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherDTO } from '../types/teachers-view.types';

const TEACHER_API = 'http://localhost:8080/api/v1/teacher';

@Injectable()
export class TeachersViewService {

    constructor(private http: HttpClient) { }

    public getTeachers(): Observable<TeacherDTO[]> {
        return <Observable<TeacherDTO[]>>this.http.get(TEACHER_API);
    }
}
