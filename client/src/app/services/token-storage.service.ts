import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ROLES } from '../types/role.types';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    constructor(private router: Router) { }

    signOut() {
        window.sessionStorage.clear();
    }

    public saveToken(token: string) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    public saveUser(user: any) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public getUser(): any {
        return JSON.parse(sessionStorage.getItem(USER_KEY)!);
    }

    public isUserAdmin(): boolean {
        return JSON.parse(sessionStorage.getItem(USER_KEY)!).role === ROLES.ROLE_ADMIN;
    }

    public isUserStudent(): boolean {
        return JSON.parse(sessionStorage.getItem(USER_KEY)!).role === ROLES.ROLE_STUDENT;
    }

    public isUserTeacher(): boolean {
        return JSON.parse(sessionStorage.getItem(USER_KEY)!).role === ROLES.ROLE_TEACHER;
    }

}