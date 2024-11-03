import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'ai-login',
  standalone: true,
  imports: [RouterLink, MatIconModule, LogoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly router = inject(Router);

  onSave() {
    this.router.navigate(['/']);
  }
}
