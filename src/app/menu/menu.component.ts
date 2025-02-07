import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }

  isAtTop = true;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isAtTop = scrollPosition < 50; // Desaparece cuando el scroll está arriba
  }

}
