import { Component } from '@angular/core';
import { MisLibrosLista } from '../mis-libros-lista/mis-libros-lista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mis-libros',
  imports: [CommonModule,MisLibrosLista],
  templateUrl: './mis-libros.html',
  styleUrls: ['./mis-libros.scss']
})
export class MisLibros {

}
