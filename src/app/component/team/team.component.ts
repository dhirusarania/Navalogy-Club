import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from '../team-card/team-card.component';
export interface TeamMember {
  name: string;
  path: string;
  Profession: string;
  LinkedInlink: string;
  GitHublink: string;
}
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, TeamCardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  getTeamMembers(): TeamMember[] {
    // You can fetch data from an external file, API, or hardcode it here
    return [
      // Example data
      {
        name: 'John Doe',
        path: 'path/to/john-doe.jpg',
        Profession: 'Developer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'John Doe',
        path: 'path/to/john-doe.jpg',
        Profession: 'Developer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'John Doe',
        path: 'path/to/john-doe.jpg',
        Profession: 'Developer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'DD',
        path: 'path/to/john-doe.jpg',
        Profession: 'Developer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      // Add more team members as needed
    ];
  }
}
