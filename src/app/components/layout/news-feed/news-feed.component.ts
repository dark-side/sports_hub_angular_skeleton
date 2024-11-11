import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PhotoContainerComponent } from '../components/photo-container/photo-container.component';
import { CardComponent } from '../components/card/card.component';
import { SmallDividerComponent } from '../components/small-divider/small-divider.component';
import { SideCardComponent } from '../components/side-card/side-card.component';
import { articles2, commented, popular, side } from './mock/mock';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ai-news-feed',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterLink,
    PhotoContainerComponent,
    CardComponent,
    SmallDividerComponent,
    SideCardComponent
  ],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent {
  articles: any;
  popular = popular;
  commented = commented;
  side = side;

  private readonly http = inject(HttpClient);

  constructor() {
    this.getArticles();
  }

  private getArticles() {
    this.http.get('http://localhost:3002/articles/').subscribe({
      next: (articles: any) => {
        console.log("*******************articles********", articles)
        this.articles = articles;
      },
      error: (error) => {
        this.articles = articles2;
      }
    });
  }
}
