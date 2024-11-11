import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgRegisterService } from './services/svg-register.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    SvgRegisterService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly iconRegistry = inject(SvgRegisterService);

  constructor() {
    this.iconRegistry.init();
  }
}
