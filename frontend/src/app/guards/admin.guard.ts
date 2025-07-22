import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('auth_token');
  if (token === 'login-office') {
    return true;
  }

  // Se não estiver autorizado, redireciona para a home
  const router = inject(Router);
  router.navigate(['/']);
  return false;
};
