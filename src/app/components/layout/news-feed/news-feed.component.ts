import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PhotoContainerComponent } from '../components/photo-container/photo-container.component';
import { CardComponent } from '../components/card/card.component';
import { SmallDividerComponent } from '../components/small-divider/small-divider.component';
import { SideCardComponent } from '../components/side-card/side-card.component';
import { articles2, commented, popular, side } from './mock/mock';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ai-news-feed',
  standalone: true,
  imports: [
    CommonModule,
    PhotoContainerComponent,
    CardComponent,
    SmallDividerComponent,
    SideCardComponent
  ],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent {
  articles: any = [];
  popular: any = [];
  commented: any = [];
  side: any = [];

  private readonly http = inject(HttpClient);

  constructor() {
    this.getArticles();
  }

  private getArticles() {
    this.http.get(`${environment['API_URL']}api/articles`).subscribe({
      next: (articles: any) => {
        this.articles = articles;
        this.popular = this.findMost('article_likes');
        this.commented = this.findMost('comments_count');
      },
      error: () => {
        this.articles = articles2;
        this.popular = popular;
        this.commented = commented;
        this.side = side;
      }
    });
  }

  private findMost(type: string) {
    return this.articles.toSorted((a: any, b: any) => b[type] - a[type]).slice(0, 3);
  }
}
