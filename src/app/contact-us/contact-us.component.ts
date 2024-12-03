import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  cursorX: number = 0;
  cursorY: number = 0;

  ngOnInit(): void {
    // Inicialización del componente
    this.startMovement();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
  }

  startMovement() {
    const interBubble = document.querySelector('.interactive') as HTMLElement;
    let curX = 0;
    let curY = 0;

    const move = () => {
      curX += (this.cursorX - curX) / 20;
      curY += (this.cursorY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    };

    move();
  }

}
