import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PhotoContainerComponent } from '../components/photo-container/photo-container.component';

@Component({
  selector: 'ai-article',
  standalone: true,
  imports: [RouterLink, MatIconModule, PhotoContainerComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
}
