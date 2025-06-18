import { Component, EventEmitter, Output } from '@angular/core';
import { Libro } from '../../models/libro';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html'
})
export class LibroListaComponent {
  @Output() seleccionar = new EventEmitter<Libro>();
  libros: Libro[];

  constructor(private libroService: LibroService) {
    this.libros = this.libroService.obtenerLibros();
  }

  onSelect(libro: Libro) {
    this.seleccionar.emit(libro);
  }
}