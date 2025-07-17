import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServerUtilsService } from '../../services/server-utils.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isShrunk = false;

  constructor(public serverUtils: ServerUtilsService) { }
  @HostListener('window:scroll', [])
  onScroll() {
    this.isShrunk = window.scrollY > 40;
  }


}
