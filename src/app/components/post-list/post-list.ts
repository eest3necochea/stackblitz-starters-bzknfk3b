import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { ApiPostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList {
  post: Post[] = [];

  constructor(private apiPostService: ApiPostService) {
    this.loadPosts();
  }

  // Cargar publicaciones desde la API externa
  loadPosts() {
    this.apiPostService.getPosts().subscribe((data) => {
      this.post = data.slice(0, 3); // Limitar a las primeras 10 publicaciones
    });
  }
}
