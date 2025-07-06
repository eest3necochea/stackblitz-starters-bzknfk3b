import { Component } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookListComponent } from '../../components/book-list/book-list';
import { BookDetailComponent } from '../../components/book-detail/book-detail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.html',
  imports: [BookListComponent, BookDetailComponent, CommonModule],
})
export class Admin {
  selectedBook?: Book;


  onBookSelected(book: Book) {
    this.selectedBook = book;
  }

}