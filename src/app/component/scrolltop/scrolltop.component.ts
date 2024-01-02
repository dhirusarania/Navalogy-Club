import { Component } from '@angular/core';

@Component({
  selector: 'app-scrolltop',
  standalone: true,
  imports: [],
  templateUrl: './scrolltop.component.html',
  styleUrl: './scrolltop.component.css'
})
export class ScrolltopComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
