import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isMenuOpen = false; // Variable para controlar el estado del menú

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Cambia el estado del menú al hacer clic en el botón de hamburguesa
  }
}
