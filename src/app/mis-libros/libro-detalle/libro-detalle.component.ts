import { Component, Input } from '@angular/core';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html'
})
export class LibroDetalleComponent {
  @Input() libro: Libro | null = null;
}