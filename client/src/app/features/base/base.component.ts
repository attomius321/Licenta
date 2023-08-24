import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { getCurrentSNConfig } from './config/sidenav.config';
import { ActivatedRoute, Router } from '@angular/router';
import { SidenavConfig, SidenavItem } from './types/base.types';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public opened: boolean = true;

  public sidenav_config: SidenavConfig = getCurrentSNConfig(this.tokenStorageService.getUser().role);

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private tokenStorageService: TokenStorageService) {
  }

  ngAfterViewInit(): void {
  }

  public openCloseSidenav(): void {
    this.opened ? this.sidenav.close() : this.sidenav.open();
    this.opened = !this.opened;
  }

  public navigateTo(snItem: SidenavItem): void {
    !snItem.isLogout ? this.router.navigate([snItem.route], { relativeTo: this.activatedRoute }) : this.logout();
  }

  public isActive(route: string): boolean {
    return this.router.url.includes(route);
  }

  public getUserEmail() {
    return this.tokenStorageService.getUser().email;
  }

  private logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
