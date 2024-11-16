import { Component, inject } from '@angular/core';
import { PhotoContainerComponent } from '../components/photo-container/photo-container.component';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { articles2 } from '../news-feed/mock/mock';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ai-article',
  standalone: true,
  imports: [CommonModule, PhotoContainerComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  article: any;
  public readonly route = inject(ActivatedRoute);
  private readonly http = inject(HttpClient);
  
  constructor() {
    this.getArticle();
  }

  private getArticle() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`${environment['API_URL']}/articles/${id}`).subscribe({
      next: (article: any) => {
        this.article = article;
      },
      error: () => {
        this.article = articles2[0];
      }
    });
  }
}
