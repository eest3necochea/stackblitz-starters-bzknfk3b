import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiPostService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // URL de la API externa

  constructor(private http: HttpClient) {}

  // Método para obtener libros desde la API
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  // Método para obtener un libro por ID
  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }
}

