import { Component } from '@angular/core';
import { TeamCardComponent } from '../team-card/team-card.component';

interface TeamMember {
  name: string;
  path: string;
  Profession: string;
  LinkedInlink: string;
  GitHublink: string;
}
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [TeamCardComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  teamMembers!: TeamMember[];

  ngOnInit(): void {
    // Hardcoded team members data
    this.teamMembers = [
      {
        name: 'John Doe',
        path: 'path/to/john-doe.jpg',
        Profession: 'Developer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      // Add more team members as needed
    ];
  }
}
