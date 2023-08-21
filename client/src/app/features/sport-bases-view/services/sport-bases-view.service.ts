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
}
