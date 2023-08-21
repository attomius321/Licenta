import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../types/login.types';

const AUTH_API = 'api/v1/auth/';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    login(credentials: Credentials): Observable<any> {
        return this.http.post('http://localhost:8080/' + AUTH_API + 'signin', {
            email: credentials.email,
            password: credentials.password
        });
    }

}