import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ai-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, SidenavComponent, FooterComponent, MatSidenavModule, MatIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
