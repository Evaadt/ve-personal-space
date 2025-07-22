import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBackofficeComponent } from './sidebar-backoffice.component';
import { AppUtilsService } from '../../services/app-utils.service';

describe('SidebarBackofficeComponent', () => {
  let component: SidebarBackofficeComponent;
  let fixture: ComponentFixture<SidebarBackofficeComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarBackofficeComponent],
      providers: [{ provide: AppUtilsService, useClass: MockAppUtilsService }]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarBackofficeComponent);
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
