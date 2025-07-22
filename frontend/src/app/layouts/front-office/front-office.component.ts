import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';


@Component({
  selector: 'app-front-office',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  standalone: true,
  templateUrl: './front-office.component.html',
  styleUrl: './front-office.component.css'
})
export class FrontOfficeComponent {

}
