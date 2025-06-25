import { Component } from '@angular/core';
import { Libro } from '../models/libro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mis-libros-lista',
  imports: [CommonModule],
  templateUrl: './mis-libros-lista.html',
  styleUrls: ['./mis-libros-lista.scss']
})
export class MisLibrosLista {
  public libros: Libro[] = [
    { id: 1, titulo: '1984', autor: 'George Orwell', leido: true },
    { id: 2, titulo: 'El Principito', autor: 'Saint-Exupéry', leido: false },
  ];

}
