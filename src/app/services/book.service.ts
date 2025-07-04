import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  private books: Book[] = [
    { id: 1, title: '1984', author: 'George Orwell', available: true },
    { id: 2, title: 'El Principito', author: 'Antoine de Saint-Exupéry', available: false },
    { id: 3, title: 'El Alquimista', author: 'Pablo Coelho', available: true }

  ];

  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }
  toggleBookAvailability(id: number): void {
    const book = this.getBookById(id);
    if (book) {
      book.available = !book.available;
    }
  }
}