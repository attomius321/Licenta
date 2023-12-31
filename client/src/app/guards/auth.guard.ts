import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { SnackBarService } from '../services/snack-bar.service';
@Injectable({
    providedIn: 'root',
})
export class AuthGuard {
    constructor(public tokenStorageService: TokenStorageService, public router: Router, public snackbarService: SnackBarService) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
        if (!this.tokenStorageService.getToken()) {
            this.snackbarService.openErrorSnackbar('Logarea este necesara pentru a accesa aceasta ruta!');
            this.router.navigate(['login']);
        }
        return true;
    }
}