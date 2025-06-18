import { Component } from '@angular/core';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-mis-libros',
  templateUrl: './mis-libros.component.html'
})
export class MisLibrosComponent {
  libroSeleccionado: Libro | null = null;

  onLibroSeleccionado(libro: Libro) {
    this.libroSeleccionado = libro;
  }
}