import { inject, Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { arrowRight } from "../svg/arrow-right.svg";
import { facebook } from "../svg/facebook.svg";
import { fbCircle } from "../svg/fb-circle.svg";
import { gmailCircle } from "../svg/gmail-circle.svg";
import { gmail } from "../svg/gmail.svg";
import { google } from "../svg/google.svg";
import { search } from "../svg/search.svg";
import { thumb } from "../svg/thumb.svg";
import { twitter } from "../svg/twitter.svg";
import { youtube } from "../svg/youtube.svg";
import { share } from "../svg/share.svg";

@Injectable()
export class SvgRegisterService {
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);

  init() {
    this.iconRegistry.addSvgIconLiteral('facebook', this.sanitizer.bypassSecurityTrustHtml(facebook));
    this.iconRegistry.addSvgIconLiteral('twitter', this.sanitizer.bypassSecurityTrustHtml(twitter));
    this.iconRegistry.addSvgIconLiteral('google', this.sanitizer.bypassSecurityTrustHtml(google));
    this.iconRegistry.addSvgIconLiteral('youtube', this.sanitizer.bypassSecurityTrustHtml(youtube));
    this.iconRegistry.addSvgIconLiteral('gmail', this.sanitizer.bypassSecurityTrustHtml(gmail));
    this.iconRegistry.addSvgIconLiteral('search', this.sanitizer.bypassSecurityTrustHtml(search));
    this.iconRegistry.addSvgIconLiteral('share', this.sanitizer.bypassSecurityTrustHtml(share));
    this.iconRegistry.addSvgIconLiteral('thumb', this.sanitizer.bypassSecurityTrustHtml(thumb));
    this.iconRegistry.addSvgIconLiteral('arrow-right', this.sanitizer.bypassSecurityTrustHtml(arrowRight));
    this.iconRegistry.addSvgIconLiteral('fb-circle', this.sanitizer.bypassSecurityTrustHtml(fbCircle));
    this.iconRegistry.addSvgIconLiteral('gmail-circle', this.sanitizer.bypassSecurityTrustHtml(gmailCircle));
  }
}
