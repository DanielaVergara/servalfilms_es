import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  // Selecciones actuales de filtros
  mediosSeleccionados: string[] = []; 
  portafoliosSeleccionados: string[] = [];

  // Lista de elementos para mostrar
  items = [
    {
      title: 'Animation Project 1',
      description: 'Description of Animation Project 1',
      imageUrl: 'assets/portafolio/logo.png',
      medio: 'animacion',
      portafolio: 'largometraje'
    },
    {
      title: 'Live Action Project 1',
      description: 'Description of Live Action Project 1',
      imageUrl: 'assets/portafolio/logo.png',
      medio: 'live-action',
      portafolio: 'cortometraje'
    },
    {
      title: 'Unscripted Project 1',
      description: 'Description of Unscripted Project 1',
      imageUrl: 'assets/portafolio/logo.png',
      medio: 'unscripted',
      portafolio: 'podcast'
    },
    {
      title: 'Mixed Project',
      description: 'This project belongs to multiple categories',
      imageUrl: 'assets/portafolio/logo.png',
      medio: 'live-action',
      portafolio: 'largometraje'
    }
  ];

  // Método de filtrado
  filteredItems() {
    return this.items.filter(item => {
      // Condición para "medio"
      const matchesMedio = this.mediosSeleccionados.length === 0 || this.mediosSeleccionados.includes(item.medio);

      // Condición para "portafolio"
      const matchesPortafolio = this.portafoliosSeleccionados.length === 0 || this.portafoliosSeleccionados.includes(item.portafolio);

      // Debe cumplir ambos filtros
      return matchesMedio && matchesPortafolio;
    });
  }

  // Métodos para seleccionar/deseleccionar filtros
  toggleMedio(medio: string) {
    if (this.mediosSeleccionados.includes(medio)) {
      this.mediosSeleccionados = this.mediosSeleccionados.filter(m => m !== medio);
    } else {
      this.mediosSeleccionados.push(medio);
    }
  }

  togglePortafolio(portafolio: string) {
    if (this.portafoliosSeleccionados.includes(portafolio)) {
      this.portafoliosSeleccionados = this.portafoliosSeleccionados.filter(p => p !== portafolio);
    } else {
      this.portafoliosSeleccionados.push(portafolio);
    }
  }
}
