import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

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
      password: ['', [Validators.required, Validators.minLength(8)]]
    }
    if (!this.isLogin) {
      this.form = this.fb.group({
        ...main,
        password_confirmation: ['', [Validators.required, Validators.minLength(8)]]
      }, { validators: this.passwordMatchValidator });
      return;
    }

    this.form = this.fb.group({
      ...main
    });
  }

  private passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const passwordConfirmation = control.get('password_confirmation');
    if (password && passwordConfirmation && password.value !== passwordConfirmation.value) {
      return { passwordMismatch: true };
    }
    return null;
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
    this.http.post(`${environment['API_URL']}api/auth/sign_in`, {
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
    this.http.post(`${environment['API_URL']}users`, {
      registration:{  
        email: this.form.value.email,
        password: this.form.value.password,
        password_confirmation: this.form.value.password_confirmation,
      }
    }).subscribe({
      next: (response: any) => {
        console.log('***********************signup***************', response)
      },
      complete: () => {
        this.router.navigate(['/log-in']);
      }
    });
  }

  isInvalid(field: string) {
    return this.form.get(field)?.invalid && (this.form.get(field)?.dirty || this.form.get(field)?.touched);
  }
}