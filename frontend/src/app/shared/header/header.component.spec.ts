import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { AppUtilsService } from '../../services/app-utils.service';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [{ provide: AppUtilsService, useClass: MockAppUtilsService }]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all menu items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.menuItems.forEach(item => {
      expect(compiled.textContent).toContain(item.label);
    });
  });

  it('should contain correct routerLinks', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links.length).toBe(component.menuItems.length);

    component.menuItems.forEach((item, index) => {
      expect(links[index].getAttribute('ng-reflect-router-link')).toBe(item.routerLink);
    });
  });




});


class MockAppUtilsService {
  // mock methods/values usados no template se houver
}
