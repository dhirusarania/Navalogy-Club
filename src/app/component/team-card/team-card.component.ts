import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css'
})
export class TeamCardComponent {
  @Input() member: any;
  // name = "Rajveer choudahary";
  // Profession = "PUBG Player";
  // path = "../../../assets/photos/team member.jpg";
  // LinkedInlink = "#";
  // GitHublink = "#";
}
