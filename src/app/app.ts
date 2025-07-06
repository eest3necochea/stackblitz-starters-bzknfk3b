import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav';
import { Footer } from './components/footer/footer';
import { PostList } from './components/post-list/post-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer,PostList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'admin-libros';
}
