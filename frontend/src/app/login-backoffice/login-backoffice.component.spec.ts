import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBackofficeComponent } from './login-backoffice.component';

describe('LoginBackofficeComponent', () => {
  let component: LoginBackofficeComponent;
  let fixture: ComponentFixture<LoginBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginBackofficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
