import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.html',
  imports: [CommonModule],
})
export class BookDetailComponent {
  @Input() book?: Book;

  constructor(private bookService: BookService) {}

  toggleBookAvailability() {
    if (this.book) {
      this.bookService.toggleBookAvailability(this.book.id);
    }
  }

  
}