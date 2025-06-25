import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MisLibros } from './mis-libros/mis-libros';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MisLibros],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'biblio-ng';
}
