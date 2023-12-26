import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { TeamCardComponent } from './component/team-card/team-card.component';
import { TeamComponent } from './component/team/team.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { HomeComponent } from './component/home/home.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { PublicationsComponent } from './component/publications/publications.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { PortfolioItemComponent } from './component/portfolio-item/portfolio-item.component';
import { Page404Component } from './page-404/page-404.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, GalleryComponent, FooterComponent, HomeComponent, TeamCardComponent, TeamComponent, AboutusComponent,
    PortfolioComponent, PublicationsComponent, ContactusComponent, PortfolioItemComponent, Page404Component, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
