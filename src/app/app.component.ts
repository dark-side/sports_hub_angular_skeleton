import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { facebook } from './components/svg/facebook.svg';
import { gmail } from './components/svg/gmail.svg';
import { google } from './components/svg/google.svg';
import { twitter } from './components/svg/twitter.svg';
import { youtube } from './components/svg/youtube.svg';
import { search } from './components/svg/search.svg';
import { share } from './components/svg/share.svg';
import { thumb } from './components/svg/thumb.svg';
import { arrowRight } from './components/svg/arrow-right.svg';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularjs_fe_genai_plgrnd';

  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    iconRegistry.addSvgIconLiteral('facebook', sanitizer.bypassSecurityTrustHtml(facebook));
    iconRegistry.addSvgIconLiteral('twitter', sanitizer.bypassSecurityTrustHtml(twitter));
    iconRegistry.addSvgIconLiteral('google', sanitizer.bypassSecurityTrustHtml(google));
    iconRegistry.addSvgIconLiteral('youtube', sanitizer.bypassSecurityTrustHtml(youtube));
    iconRegistry.addSvgIconLiteral('gmail', sanitizer.bypassSecurityTrustHtml(gmail));
    iconRegistry.addSvgIconLiteral('search', sanitizer.bypassSecurityTrustHtml(search));
    iconRegistry.addSvgIconLiteral('share', sanitizer.bypassSecurityTrustHtml(share));
    iconRegistry.addSvgIconLiteral('thumb', sanitizer.bypassSecurityTrustHtml(thumb));
    iconRegistry.addSvgIconLiteral('arrow-right', sanitizer.bypassSecurityTrustHtml(arrowRight));
  }
}
