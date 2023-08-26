import { HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';
import { catchError, throwError } from "rxjs";
import { SnackBarService } from "../services/snack-bar.service";
import { Router } from "@angular/router";


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenStorageService,
    private snackBarService: SnackBarService,
    private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.tokenService.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          if (error.error.message.includes('JWT expired')) {
            this.snackBarService.openErrorSnackbar('Sesiunea a expirat!');
          }
          this.tokenService.signOut();
          this.moveToLogin();
        }

        if (error.status === 403) {
          if (error.error.message === 'Forbidden') {
            this.snackBarService.openErrorSnackbar('Nu sunteti autorizat sa executati aceasta actiune!');
          } else {
            this.snackBarService.openErrorSnackbar('Sesiunea a expirat!');
          }
          this.tokenService.signOut();
          this.moveToLogin();
        }

        return throwError(() => error)
      })
    );
  }

  private moveToLogin() {
    this.router.navigate(['/login']);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
