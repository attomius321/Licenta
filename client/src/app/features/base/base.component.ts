import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SNConfig } from './config/sidenav.config';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public opened!: boolean;

  public sidenav_config = SNConfig;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public openCloseSidenav(): void {
    this.opened ? this.sidenav.close() : this.sidenav.open();
    this.opened = !this.opened;
  }

  public moveTo(route: string): void {
    this.router.navigate([route], { relativeTo: this.activatedRoute })
  }
}
