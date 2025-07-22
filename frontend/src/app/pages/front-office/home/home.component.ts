import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from '../../../shared/components/content-card/content-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContentCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
