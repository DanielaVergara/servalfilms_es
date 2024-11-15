import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private timeout: any;  // Variable para almacenar el temporizador
  private idleTime: number = 3000;  // Tiempo de inactividad antes de ocultar el menú (en milisegundos)
  private isDesktop: boolean = true;  // Bandera para saber si estamos en una pantalla de escritorio

  constructor() { }

  ngOnInit(): void {
    this.checkScreenSize();  // Verifica el tamaño de la pantalla al iniciar
    this.hideMenuAfterIdle();
  }

  // Muestra el menú nuevamente cuando el ratón se mueve
  @HostListener('document:mousemove')
  onMouseMove(): void {
    if (this.isDesktop) {  // Solo activar esta funcionalidad si estamos en una pantalla de escritorio
      const navbar = document.querySelector('.navbar') as HTMLElement;
      navbar?.classList.remove('hidden');  // Muestra el menú cuando el ratón se mueve

      // Reinicia el temporizador para que el menú se oculte nuevamente después de un período de inactividad
      clearTimeout(this.timeout);
      this.hideMenuAfterIdle();  // Reinicia el temporizador para la inactividad
    }
  }

  // Oculta el menú después de un tiempo de inactividad
  hideMenuAfterIdle(): void {
    if (this.isDesktop) {  // Solo ocultar el menú si estamos en una pantalla de escritorio
      this.timeout = setTimeout(() => {
        const navbar = document.querySelector('.navbar') as HTMLElement;
        navbar?.classList.add('hidden');  // Oculta el menú después de un periodo de inactividad
      }, this.idleTime);
    }
  }

  // Detecta el tamaño de la pantalla y ajusta el comportamiento
  checkScreenSize(): void {
    if (window.innerWidth < 768) {
      this.isDesktop = false;  // Si la pantalla es pequeña (móvil o tablet), desactivamos la funcionalidad
    } else {
      this.isDesktop = true;   // Si la pantalla es grande (computadora), activamos la funcionalidad
    }
  }

  // Detecta cambios en el tamaño de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();  // Verifica nuevamente el tamaño de la pantalla cuando se cambia el tamaño de la ventana
  }
}
