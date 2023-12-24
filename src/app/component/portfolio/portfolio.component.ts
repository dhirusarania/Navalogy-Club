import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioItemComponent } from '../../portfolio-item/portfolio-item.component';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule,PortfolioItemComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
   all(): void{
     this.removeclass();
     document.getElementById("all")?.classList.add('activeclass');
     console.log('all');
   };
   SDN():void{
    this.removeclass();
    document.getElementById("SDN")?.classList.add('activeclass');
    console.log('SDN');
   };

   cloud():void{
    this.removeclass();
    document.getElementById("cloud")?.classList.add('activeclass');
    console.log('cloud');
   };

   hardware():void{
    this.removeclass();
    document.getElementById("hardware")?.classList.add('activeclass');
    console.log('hardware');
   };

   removeclass(): void {
    document.getElementById("all")?.classList.remove('activeclass');
    document.getElementById("SDN")?.classList.remove('activeclass');
    document.getElementById("cloud")?.classList.remove('activeclass');
    document.getElementById("hardware")?.classList.remove('activeclass');
    console.log('remove');
   
  }
}
