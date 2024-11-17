import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'ai-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatIconModule,
    LogoComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form!: FormGroup;
  readonly router = inject(Router);
  isLogin = this.router.url.includes('log-in');

  private readonly http = inject(HttpClient);
  private readonly fb = inject(FormBuilder);

  constructor() {
    this.createFormGroup();
  }

  private createFormGroup(): void {
    const main = {
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    }
    if (!this.isLogin) {
      this.form = this.fb.group({
        ...main,
        firstName: ['', Validators.required],
        lastName: ['', Validators.required]
      });
      return;
    }

    this.form = this.fb.group({
      ...main
    });
  }

  onSave(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    if (this.isLogin) {
      this.logIn();
      return;
    }
    this.signup();
  }

  logIn(): void {
    this.http.post(`${environment['API_URL']}/auth/login/`, {
      email: this.form.value.email,
      password: this.form.value.password
    }).subscribe({
      next: (response: any) => {
        console.log('***********************login***************', response)
      },
      complete: () => {
        this.router.navigate(['/']);
      }
    });
  }

  signup(): void {
    this.http.post(`${environment['API_URL']}/auth/signup/`, {
      username: this.form.value.email,
      email: this.form.value.email,
      password: this.form.value.password
    }).subscribe({
      next: (response: any) => {
        console.log('***********************signup***************', response)
      },
      complete: () => {
        this.router.navigate(['/']);
      }
    });
  }

  isInvalid(field: string) {
    return this.form.get(field)?.invalid && (this.form.get(field)?.dirty || this.form.get(field)?.touched);
  }
}
