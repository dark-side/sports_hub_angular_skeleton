import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ai-side-card',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './side-card.component.html',
  styleUrl: './side-card.component.scss'
})
export class SideCardComponent {
  @Input() article: any;
}
