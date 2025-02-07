import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import rough from 'roughjs/bundled/rough';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('canvasLeft') canvasLeftRef: ElementRef | undefined;
  @ViewChild('canvasRight') canvasRightRef: ElementRef | undefined;

  constructor() { }

  ngAfterViewInit() {
    // Accede al contexto de los dos lienzos
    const canvasLeft = this.canvasLeftRef?.nativeElement;
    const ctxLeft = canvasLeft.getContext('2d');
    
    const canvasRight = this.canvasRightRef?.nativeElement;
    const ctxRight = canvasRight.getContext('2d');
    
    if (ctxLeft && ctxRight) {
      const x1 = 10, y1 = 50, x2 = 590, y2 = 50;

      // Establece el estilo de la línea
      ctxLeft.lineWidth = 3;
      ctxLeft.strokeStyle = "#ef940b"; 
      ctxLeft.lineCap = "round"; 

      ctxRight.lineWidth = 3;
      ctxRight.strokeStyle = "#ef940b"; 
      ctxRight.lineCap = "round"; 

      // Dibuja las líneas en ambos lienzos
      this.drawCurvedHandmadeLine(ctxLeft, x1, y1, x2, y2);
      this.drawCurvedHandmadeLine(ctxRight, x1, y1, x2, y2);
    }
  }

  drawCurvedHandmadeLine(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);

    const steps = 200;
    const stepX = (x2 - x1) / steps;
    const stepY = (y2 - y1) / steps;
    const curvatureStrength = 5; 

    for (let i = 0; i <= steps; i++) {
      let x = x1 + i * stepX;
      let y = y1 + i * stepY;

      // Introduce una curva suave usando Math.sin()
      //const curveVariation = Math.sin(i / steps * Math.PI) * curvatureStrength;
      //y += curveVariation;

      // Añade un poco de aleatoriedad para el efecto "hecho a mano"
      const randomness = 0.7;
      x += (Math.random() * 2 - 1) * randomness;
      y += (Math.random() * 2 - 1) * randomness;

      ctx.lineTo(x, y);
    }

    ctx.stroke();
  }
}
