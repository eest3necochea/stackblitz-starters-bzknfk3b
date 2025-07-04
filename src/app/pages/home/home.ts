import { Component } from '@angular/core';
import { BookListComponent } from '../../components/book-list/book-list';

@Component({
  selector: 'app-home',
  imports: [BookListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
