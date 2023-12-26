import { Component } from '@angular/core';
import { Page404Component } from '../../page-404/page-404.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Page404Component],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
