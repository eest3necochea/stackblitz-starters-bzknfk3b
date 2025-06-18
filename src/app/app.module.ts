import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MisLibrosComponent } from './mis-libros/mis-libros.component';
import { LibroListaComponent } from './mis-libros/libro-lista/libro-lista.component';
import { LibroDetalleComponent } from './mis-libros/libro-detalle/libro-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MisLibrosComponent,
    LibroListaComponent,
    LibroDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }