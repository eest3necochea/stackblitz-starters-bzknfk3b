import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.html',
  imports: [CommonModule],
})
export class BookListComponent {
  books: Book[] = [];
  @Output() bookSelected = new EventEmitter<Book>();

  constructor(private bookService: BookService) {
    this.loadBooks();
  }

  loadBooks() {
    this.books = this.bookService.getBooks();
  }

  selectBook(book: Book) {
    this.bookSelected.emit(book);
  }
}