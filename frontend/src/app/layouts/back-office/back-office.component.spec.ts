import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficeComponent } from './back-office.component';

describe('BackOfficeComponent', () => {
  let component: BackOfficeComponent;
  let fixture: ComponentFixture<BackOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackOfficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header and footer', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-sidebar-backoffice')).toBeTruthy();
  });
});
