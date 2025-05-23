import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const permissionRoleGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  const role = localStorage.getItem('role') ;
  const expectedRole = route.data['role'];
  const token = localStorage.getItem('token');

  if (!token) return router.parseUrl('/login');

  if (role === expectedRole) {
    return true;
  } else {
    return router.parseUrl('side/profile');
  }
};
