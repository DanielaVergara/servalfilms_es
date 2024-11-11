import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
const rough = require('roughjs/bundled/rough.cjs');

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {

  @ViewChild('lineLeft') lineLeft!: ElementRef;
  @ViewChild('lineRight') lineRight!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    // Asegurarse de que Angular haya completado la detección de cambios
    this.cdr.detectChanges(); 
    this.drawRoughLines();
  }

  drawRoughLines() {
    // Verificar que los elementos estén presentes
    if (this.lineLeft && this.lineRight) {
      // Crear el "canvas" de RoughJS para los divs
      const rcLeft = rough.canvas(this.lineLeft.nativeElement);
      const rcRight = rough.canvas(this.lineRight.nativeElement);

      // Dibujar las líneas en los divs
      rcLeft.line(10, 10, 300, 10, { stroke: 'orange', strokeWidth: 3 });
      rcRight.line(10, 10, 300, 10, { stroke: 'orange', strokeWidth: 3 });
    }
  }
}
