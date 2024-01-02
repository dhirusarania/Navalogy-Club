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
  homepage(): void {
    document.getElementById("homepage")?.scrollIntoView({ behavior: "smooth" });
  }
  aboutpage(): void {
    document.getElementById("aboutuspage")?.scrollIntoView({ behavior: "smooth" });
  }
  publicationspage(): void {
    document.getElementById("publicationspage")?.scrollIntoView({ behavior: "smooth" });
  }
  portfoliopage(): void {
    document.getElementById("portfoliopage")?.scrollIntoView({ behavior: "smooth" });
  }
  teampage(): void {
    document.getElementById("teampage")?.scrollIntoView({ behavior: "smooth" });
  }
  contactuspage(): void {
    document.getElementById("contactuspage")?.scrollIntoView({ behavior: "smooth" });
  }
}
