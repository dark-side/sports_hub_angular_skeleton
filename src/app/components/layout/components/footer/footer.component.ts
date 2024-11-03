import { Component } from '@angular/core';
import { LogoComponent } from '../../../logo/logo.component';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'ai-footer',
  standalone: true,
  imports: [LogoComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  emailFormControl = new FormControl('', [Validators.email]);
}
