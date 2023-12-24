import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from '../team-card/team-card.component';
export interface TeamMember {
  name: string;
  path: string;
  Designation: string;
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
  getMentor(): TeamMember[] {
    return [
      {
        name: 'mentor',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Developer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
    ];
  }
  getCurrentScholars(): TeamMember[] {
    return [
      {
        name: 'CurrentScholars',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'CurrentScholars',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'CurrentScholars',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'CurrentScholars',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'CurrentScholars',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'CurrentScholars',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'CurrentScholars',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'CurrentScholars',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'CurrentScholars',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'CurrentScholars',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
    ];
  }
  getCurrentmembers(): TeamMember[] {
    return [
      {
        name: 'Currentmembers',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'Currentmembers',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'Currentmembers',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'Currentmembers',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'Currentmembers',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
    ];
  }
  getfoundingmembers(): TeamMember[] {
    return [
      {
        name: 'foundingmembers',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'foundingmembers',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'foundingmembers',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
    ];
  }
  getpastmembers(): TeamMember[] {
    return [
      {
        name: 'pastmembers',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'pastmembers',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'pastmembers',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'pastmembers',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
      {
        name: 'pastmembers',
        path: './../../../assets/photos/team member.jpg',
        Designation: 'Dancer',
        LinkedInlink: 'https://www.linkedin.com/in/johndoe/',
        GitHublink: 'https://github.com/johndoe',
      },
    ];
  }
  removeclass(): void {
    document.getElementById("Mentor")?.classList.remove('activeclass');
    document.getElementById("CurrentScholars")?.classList.remove('activeclass');
    document.getElementById("Currentmembers")?.classList.remove('activeclass');
    document.getElementById("foundingmembers")?.classList.remove('activeclass');
    document.getElementById("pastmembers")?.classList.remove('activeclass');
    document.getElementById("Mentor1")?.classList.remove('buttoncolor')
    document.getElementById("CurrentScholars1")?.classList.remove('buttoncolor');
    document.getElementById("Currentmembers1")?.classList.remove('buttoncolor');
    document.getElementById("foundingmembers1")?.classList.remove('buttoncolor');
    document.getElementById("pastmembers1")?.classList.remove('buttoncolor');
  }
  Mentor(): void {
    this.removeclass();
    document.getElementById("Mentor")?.classList.add('activeclass');
    document.getElementById("Mentor1")?.classList.add('buttoncolor')
  }
  CurrentScholars(): void {
    this.removeclass();
    document.getElementById("CurrentScholars")?.classList.add('activeclass');
    document.getElementById("CurrentScholars1")?.classList.add('buttoncolor');
  }
  Currentmembers(): void {
    this.removeclass();
    document.getElementById("Currentmembers")?.classList.add('activeclass');
    document.getElementById("Currentmembers1")?.classList.add('buttoncolor');
  }
  foundingmembers(): void {
    this.removeclass();
    document.getElementById("foundingmembers")?.classList.add('activeclass');
    document.getElementById("foundingmembers1")?.classList.add('buttoncolor');
  }
  pastmembers(): void {
    this.removeclass();
    document.getElementById("pastmembers")?.classList.add('activeclass');
    document.getElementById("pastmembers1")?.classList.add('buttoncolor');
  }
}