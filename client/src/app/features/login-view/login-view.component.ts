import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public login() {
    this.router.navigate(['base/students'])
  }
}
