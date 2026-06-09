import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminModeService } from './admin-mode.service';

describe('AdminModeService', () => {
  let service: AdminModeService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(AdminModeService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should enable admin mode when is_admin=true is in the url', async () => {
    await router.navigateByUrl('/?is_admin=true');
    expect(service.isAdmin()).toBeTrue();
  });

  it('should disable admin mode when query param is absent', async () => {
    await router.navigateByUrl('/');
    expect(service.isAdmin()).toBeFalse();
  });
});
