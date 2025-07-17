import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerUtilsService {
  private router = inject(Router);

  /** Guarda a rota atual */
  private currentRoute$ = new BehaviorSubject<string>(this.router.url);

  constructor() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute$.next(event.urlAfterRedirects);
    });
  }

  /** Verifica se está numa rota específica */
  isRoute(path: string): boolean {
    const current = this.currentRoute$.value;
    return current === path || current.startsWith(path + '/');
  }

  /** Verifica se a rota atual está entre várias */
  isAnyRoute(paths: string[]): boolean {
    return paths.some(p => this.isRoute(p));
  }
}
