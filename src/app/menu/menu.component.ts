import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private timeout: any;
  private idleTime: number = 3000; // Tiempo de inactividad antes de ocultar el menú (en milisegundos)
  private isDesktop: boolean = true; // Bandera para saber si estamos en una pantalla de escritorio
  public isMenuVisible: boolean = false; // Controla la visibilidad del menú

  constructor() { }

  ngOnInit(): void {
    this.checkScreenSize(); // Verifica el tamaño de la pantalla al iniciar
    this.hideMenuAfterIdle();
  }

  @HostListener('document:mousemove')
  onMouseMove(): void {
    if (this.isDesktop) {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      navbar?.classList.remove('hidden');
      clearTimeout(this.timeout);
      this.hideMenuAfterIdle();
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const menuButton = document.querySelector('.menu-button') as HTMLElement;

    // Verifica si el clic fue fuera del menú o del botón que abre el menú
    if (navbar && !navbar.contains(event.target as Node) && !menuButton.contains(event.target as Node)) {
      this.isMenuVisible = false;
    }
  }

  hideMenuAfterIdle(): void {
    if (this.isDesktop) {
      this.timeout = setTimeout(() => {
        this.isMenuVisible = false;
      }, this.idleTime);
    }
  }

  checkScreenSize(): void {
    if (window.innerWidth < 768) {
      this.isDesktop = false; // Si la pantalla es pequeña
    } else {
      this.isDesktop = true; // Si la pantalla es grande
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize(); // Revisa el tamaño cuando se cambia la ventana
  }

  // Método para alternar el menú
  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible; // Cambia la visibilidad del menú
  }
}
