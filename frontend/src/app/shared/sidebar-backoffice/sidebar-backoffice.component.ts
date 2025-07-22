import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppUtilsService } from '../../services/app-utils.service';

@Component({
  selector: 'app-sidebar-backoffice',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-backoffice.component.html',
  styleUrl: './sidebar-backoffice.component.css'
})
export class SidebarBackofficeComponent implements OnInit {

  menuItems: MenuItem[] = [
    { routerLink: '/', label: 'Home', icon: 'fa fa-home' },
    { routerLink: '/aulas', label: 'Yoga', icon: 'fa fa-yin-yang' },
    { routerLink: '/publicacoes', label: 'Publicações', icon: 'fa fa-book' },
    { routerLink: '/projetos', label: 'Projetos', icon: 'fa fa-trophy' },
    { routerLink: '/sobre', label: 'Quem é Ve!?', icon: 'fa fa-leaf' }
  ];

  constructor(public appUtils: AppUtilsService) { }

  ngOnInit(): void {
  }

}