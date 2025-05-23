import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { permissionRoleGuard } from './permission-role.guard';

describe('permissionRoleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => permissionRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
