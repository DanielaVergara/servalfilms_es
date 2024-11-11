import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import rough from 'roughjs/bundled/rough';

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
    this.cdr.detectChanges();
    console.log("hola", rough);  // Asegúrate de que rough esté disponible
    this.drawRoughLines();
  }
  

  drawRoughLines() {
    // Verificar que los elementos estén presentes
    if (this.lineLeft && this.lineRight) {
      // Crear el "canvas" de RoughJS para los divs
      const rcLeft = rough.canvas(this.lineLeft.nativeElement);
      const rcRight = rough.canvas(this.lineRight.nativeElement);

      // Dibujar las líneas en los divs
      rcLeft.line(10, 10, 150, 10, { stroke: 'orange', strokeWidth: 3 });
      rcRight.line(10, 10, 150, 10, { stroke: 'orange', strokeWidth: 3 });
    }
  }
}
