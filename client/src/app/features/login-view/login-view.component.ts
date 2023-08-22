import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {

  public signupForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  public login() {
    this.authService.login(this.signupForm.getRawValue()).pipe(
      tap((data) => {
        this.tokenStorage.saveToken(data.jwtAuthenticationResponse.token);
        this.tokenStorage.saveUser(data.user);
        this.router.navigate(['base/scheduler']);
      }),
      catchError((err) => throwError(() => err))
    ).subscribe();
  }
}
