import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarBackofficeComponent } from '../../shared/sidebar-backoffice/sidebar-backoffice.component';
import { AppUtilsService } from '../../services/app-utils.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-office',
  imports: [
    RouterOutlet,
    CommonModule,
    SidebarBackofficeComponent],
  standalone: true,
  templateUrl: './back-office.component.html',
  styleUrl: './back-office.component.css',
})
export class BackOfficeComponent {
  constructor(public appUtils: AppUtilsService) { }
}
