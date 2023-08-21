import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Credentials } from '../types/login.types';
import { LoginDTO } from '../features/login-view/types/login-view.types';
import { SnackBarService } from './snack-bar.service';

const AUTH_API = 'api/v1/auth/';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private snackbarService: SnackBarService) { }

    login(credentials: Credentials): Observable<LoginDTO> {
        return <Observable<any>>this.http.post('http://localhost:8080/' + AUTH_API + 'signin', {
            email: credentials.email,
            password: credentials.password
        }).pipe(
            tap(() => this.snackbarService.openGenericSnackbar('Ati fost logat cu succes!')),
            catchError((err) => throwError(() => console.log(err)))
        );
    }

}