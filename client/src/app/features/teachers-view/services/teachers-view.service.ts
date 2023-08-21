import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const TEACHER_API = 'http://localhost:8080/api/v1/teacher';

@Injectable()
export class TeachersViewService {

    constructor(private http: HttpClient) { }

    public getTeachers(): Observable<any[]> {
        return <Observable<any[]>>this.http.get(TEACHER_API);
    }
}
