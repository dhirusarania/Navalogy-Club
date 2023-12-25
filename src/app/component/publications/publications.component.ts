import { Component } from '@angular/core';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {

  removeclass(): void {
    document.getElementById("01")?.classList.remove('activeclass');
    document.getElementById("02")?.classList.remove('activeclass');
    document.getElementById("03")?.classList.remove('activeclass');
    document.getElementById("04")?.classList.remove('activeclass');
  }
  first(): void {
    this.removeclass();
    document.getElementById("01")?.classList.add('activeclass');
    // document.getElementById("btn1")?.classList.add('rotatebutton');
    console.log('01');
  };
  second(): void {
    this.removeclass();
    document.getElementById("02")?.classList.add('activeclass');
    // document.getElementById("btn2")?.classList.add('rotatebutton');
    console.log('02');
  };

  third(): void {
    this.removeclass();
    document.getElementById("03")?.classList.add('activeclass');
    // document.getElementById("btn3")?.classList.add('rotatebutton');
    console.log('03');
  };

  forth(): void {
    this.removeclass();
    document.getElementById("04")?.classList.add('activeclass');
    // document.getElementById("btn4")?.classList.add('rotatebutton');
    console.log('04');
  };

}
