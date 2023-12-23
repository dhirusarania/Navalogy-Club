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
    return [
      {
        name: 'John Doe',
        path: './../../../assets/photos/team member.jpg',
        Profession: 'Developer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
    ];
  }
  getmentors(): TeamMember[] {
    return [
      {
        name: 'Dhritideepa sarnia',
        path: './../../../assets/photos/team member.jpg',
        Profession: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
    ];
  }
}
