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
    let var1 = document.getElementById("btn1")?.innerHTML;

    var1 = '<img class="w-5 h-5" src="./../../../assets/photos/up-arrow.png">';
    console.log('01');
  };
  second(): void {
    this.removeclass();
    document.getElementById("02")?.classList.add('activeclass');
    let var2 = document.getElementById("btn2")?.innerHTML;
    var2 = '<img class="w-5 h-5" src="./../../../assets/photos/up-arrow.png">';
    console.log('02');
  };

  third(): void {
    this.removeclass();
    document.getElementById("03")?.classList.add('activeclass');
    let var3 = document.getElementById("btn3")?.innerHTML;
    var3 = '<img class="w-5 h-5" src="./../../../assets/photos/up-arrow.png">';
    console.log('03');
  };

  forth(): void {
    this.removeclass();
    document.getElementById("04")?.classList.add('activeclass');
    let var4 = document.getElementById("btn4")?.innerHTML;
    var4 = '<img class="w-5 h-5" src="./../../../assets/photos/up-arrow.png">';
    console.log('04');
  };

}
