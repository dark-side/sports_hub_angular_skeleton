import { Component } from '@angular/core';
import { LogoComponent } from '../../../logo/logo.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ai-navbar',
  standalone: true,
  imports: [LogoComponent, ReactiveFormsModule, RouterLink, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  lang = new FormControl('en');
}
