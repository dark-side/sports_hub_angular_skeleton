import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ai-small-divider',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './small-divider.component.html',
  styleUrl: './small-divider.component.scss'
})
export class SmallDividerComponent {
  @Input() title: any;
}
