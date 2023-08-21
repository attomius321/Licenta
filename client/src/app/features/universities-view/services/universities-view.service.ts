import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversityDTO } from '../types/universities-view.types';

const UNIVERSITY_API = 'http://localhost:8080/api/v1/university';

@Injectable()
export class UniversitiesViewService {

    constructor(private http: HttpClient) { }

    public getUniversities(): Observable<UniversityDTO[]> {
        return <Observable<UniversityDTO[]>>this.http.get(UNIVERSITY_API);
    }
}
