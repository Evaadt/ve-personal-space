import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppUtilsService } from '../../services/app-utils.service';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public appUtils: AppUtilsService) {}

  menuItems: MenuItem[] = [
    { routerLink: '/', label: 'Home', icon: 'fa fa-home' },
    { routerLink: '/aulas', label: 'Yoga', icon: 'fa fa-yin-yang' },
    { routerLink: '/publicacoes', label: 'Publicações', icon: 'fa fa-book' },
    { routerLink: '/projetos', label: 'Projetos', icon: 'fa fa-trophy' },
    { routerLink: '/sobre', label: 'Quem é Ve!?', icon: 'fa fa-leaf' }
  ];
}
