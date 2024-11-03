import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'ai-sidenav',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, RouterLink, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  menuItems = [
    'HOME',
    'NBA',
    'NFL',
    'MLB',
    'NHL',
    'CBB',
    'CFB',
    'NASCAR',
    'GOLF',
    'SOCCER',
    'Team Hub',
    'LIFESTYLE',
    'DEALBOOK',
    'VIDEO'
  ];
}
