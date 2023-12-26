import { Component } from '@angular/core';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {
  first(): void {
    let a = document.getElementById("01");
    if (a?.classList.contains("activeclass"))

      a?.classList.remove('activeclass');
    else
      a?.classList.add('activeclass');
  };
  second(): void {
    let a = document.getElementById("02");
    if (a?.classList.contains("activeclass"))

      a?.classList.remove('activeclass');
    else
      a?.classList.add('activeclass');
  };

  third(): void {
    let a = document.getElementById("03");
    if (a?.classList.contains("activeclass"))

      a?.classList.remove('activeclass');
    else
      a?.classList.add('activeclass');
  };

  forth(): void {
    let a = document.getElementById("04");
    if (a?.classList.contains("activeclass"))

      a?.classList.remove('activeclass');
    else
      a?.classList.add('activeclass');
  };

}
