import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({ providedIn: 'root' })
export class LibroService {
  private libros: Libro[] = [
    { id: 1, titulo: '1984', autor: 'George Orwell', leido: true },
    { id: 2, titulo: 'El Principito', autor: 'Saint-Exupéry', leido: false },
  ];

  obtenerLibros(): Libro[] {
    return this.libros;
  }

  seleccionarLibro(libro: Libro) {
    this.libroSeleccionado.next(libro);
  }

  libroSeleccionado = new BehaviorSubject<Libro | null>(null);
}