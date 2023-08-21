import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
@Injectable({
    providedIn: 'root',
})
export class AuthGuard {
    constructor(public tokenStorageService: TokenStorageService, public router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
        if (!this.tokenStorageService.getToken()) {
            window.alert('Access Denied, Login is Required to Access This Page!');
            this.router.navigate(['login']);
        }
        return true;
    }
}