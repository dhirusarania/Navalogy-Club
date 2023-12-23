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
    ];
  }
  removeclass(): void {
    let css = document.getElementById("Mentor");
    css?.classList.add('deactiveclass');
    let css1 = document.getElementById("CurrentScholars");
    css1?.classList.remove('activeclass');
    let css3 = document.getElementById("Currentmembers");
    css3?.classList.remove('activeclass');
    let css4 = document.getElementById("foundingmembers");
    css4?.classList.remove('activeclass');
    let css5 = document.getElementById("pastmembers");
    css5?.classList.remove('activeclass');
  }
  Mentor(): void {
    console.log("mentor");
    document.getElementById("Mentor")?.classList.add('activeclass');
    this.removeclass();
  }
  CurrentScholars(): void {
    console.log("currentscholers");
    this.removeclass();
    document.getElementById("CurrentScholars")?.classList.add('activeclass');
  }
  Currentmembers(): void {
    console.log("currentmembers");
    this.removeclass();
    let css3 = document.getElementById("Currentmembers")?.classList.add('activeclass');
  }
  foundingmembers(): void {
    console.log("founding members");
    this.removeclass();
    let css4 = document.getElementById("foundingmembers")?.classList.add('activeclass');
  }
  pastmembers(): void {
    console.log("past members");
    this.removeclass();
    let css5 = document.getElementById("pastmembers")?.classList.add('activeclass');
  }
}