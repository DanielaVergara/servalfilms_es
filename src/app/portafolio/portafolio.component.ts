import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
  encapsulation: ViewEncapsulation.None // Deshabilita encapsulación para probar
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
      title: 'Amor en los Tiempos de como sea que se llame el Presente',
      description: 'En Desarrollo, Largometraje',
      imageUrl: 'assets/portafolio/AmorEnLosTiemposDeComoSeaQueSeLlameElPresenteLargo.jpg',
      medio: 'animacion',
      portafolio: 'largometraje'
    },
    {
      title: 'Amor en los Tiempos de como sea que se llame el Presente.',
      description: 'En Distribución, Cortometraje',
      imageUrl: 'assets/portafolio/AmorEnLosTiemposDeComoSeaQueSeLlameElPresenteCorto.jpg',
      medio: 'animacion',
      portafolio: 'cortometraje'
    },
    {
      title: 'Nadie Vio Mi Película',
      description: 'En Produccion, Podcast',
      imageUrl: 'assets/portafolio/NadieVioMiPelicula.png',
      medio: 'unscripted',
      portafolio: 'podcast'
    },
    {
      title: 'Maquina de Humo',
      description: 'En distribucion, Video Clip',
      imageUrl: 'assets/portafolio/MaquinaDeHumo.png',
      medio: 'live-action',
      portafolio: 'videoclip'
    },
    {
      title: 'Comfort in the Kill',
      description: 'En producción, Video Clip',
      imageUrl: 'assets/portafolio/ComfortintheKill.jpg',
      medio: 'animacion',
      portafolio: 'videoclip'
    },
    {
      title: 'Una Mas',
      description: 'En Produccion, Cortometraje',
      imageUrl: 'assets/portafolio/UnaMas.jpg',
      medio: 'animacion',
      portafolio: 'cortometraje'
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
