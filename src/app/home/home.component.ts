import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    gsap.timeline({ defaults: { duration: 1 } })
    .fromTo('.gif-background', { opacity: 0 }, { opacity: 1, ease: 'power1.inOut' })
    .fromTo('.gif-background .gif-image', { rotation: 0.1 }, { rotation: -0.1, ease: 'none', yoyo: true, repeat: 1 }, 0)
    .to('.gif-background .gif-image', { opacity: 1, ease: 'power2.inOut' }, 4)
      
      .from('.title', { duration: 0.5, opacity: 1, y: -40, ease: 'power3.out' })
      .from('.subtitle', { duration: 0.5, opacity: 1, y: 50, ease: 'power3.out', delay: 0.4 })
      .from('.icon', { duration: 0.5, opacity: 0, scale: 0.5, ease: 'power3.out' }, 2); 
  }
  
}
