import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherDTO } from '../types/teachers-view.types';
import { UniversityDTO } from '../../universities-view/types/universities-view.types';

const TEACHER_API = 'http://localhost:8080/api/v1/teacher';
const UNIVERSITY_API = 'http://localhost:8080/api/v1/university';

@Injectable()
export class TeachersViewService {

    constructor(private http: HttpClient) { }

    public getTeachers(): Observable<TeacherDTO[]> {
        return <Observable<TeacherDTO[]>>this.http.get(TEACHER_API);
    }

    public createTeacher(teacherDTO: Partial<TeacherDTO>): Observable<TeacherDTO> {
        return <Observable<TeacherDTO>>this.http.post(TEACHER_API, teacherDTO);
    }

    public updateTeacher(teacherDTO: TeacherDTO): Observable<TeacherDTO> {
        return <Observable<TeacherDTO>>this.http.put(TEACHER_API, teacherDTO);
    }

    public deleteTeacher(ids: string[]): Observable<any> {
        return this.http.delete(TEACHER_API, { body: ids });
    }

    public getUniversities(): Observable<UniversityDTO[]> {
        return <Observable<UniversityDTO[]>>this.http.get(UNIVERSITY_API);
    }
}
