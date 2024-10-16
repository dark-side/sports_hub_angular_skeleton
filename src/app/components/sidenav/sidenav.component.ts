import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ai-sidenav',
  standalone: true,
  imports: [UpperCasePipe],
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
  ]
}
