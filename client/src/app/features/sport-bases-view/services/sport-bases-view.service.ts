import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseLocationDTO } from '../types/sport-bases-view.types';

const BASES_API = 'http://localhost:8080/api/v1/courseLocation';

@Injectable()
export class SportBasesViewService {

    constructor(private http: HttpClient) { }

    public getCourseLocations(): Observable<CourseLocationDTO[]> {
        return <Observable<CourseLocationDTO[]>>this.http.get(BASES_API);
    }

    public createCourseLocation(courseLocationDTO: Partial<CourseLocationDTO>): Observable<CourseLocationDTO> {
        return <Observable<CourseLocationDTO>>this.http.post(BASES_API, courseLocationDTO);
    }

    public updateCourseLocation(courseLocationDTO: CourseLocationDTO): Observable<CourseLocationDTO> {
        return <Observable<CourseLocationDTO>>this.http.put(BASES_API, courseLocationDTO);
    }

    public deleteCourseLocation(ids: string[]): Observable<any> {
        return this.http.delete(BASES_API, { body: ids });
    }
}
