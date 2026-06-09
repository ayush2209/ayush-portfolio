import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminModeService {
  private readonly adminParam = 'is_admin';
  private readonly adminValue = 'true';

  readonly isAdmin = signal(false);

  constructor(private router: Router) {
    this.syncFromUrl();
    this.router.events.subscribe(() => this.syncFromUrl());
  }

  private syncFromUrl(): void {
    const tree = this.router.parseUrl(this.router.url);
    const value = tree.queryParams[this.adminParam];
    this.isAdmin.set(value === this.adminValue);
  }
}
