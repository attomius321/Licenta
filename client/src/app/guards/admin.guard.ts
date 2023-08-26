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
export class AdminGuard {
    constructor(public tokenStorageService: TokenStorageService, public router: Router, public snackbarService: SnackBarService) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
        if (!this.tokenStorageService.isUserAdmin()) {
            this.tokenStorageService.signOut();
            this.snackbarService.openErrorSnackbar('Nu aveti acces la aceasta ruta!');
            this.router.navigate(['login']);
        }
        return true;
    }
}
