import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const permissionGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  const token = localStorage.getItem('token') ;
 // const role = localStorage.getItem('role') ;

  if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
