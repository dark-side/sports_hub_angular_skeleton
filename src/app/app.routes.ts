import { Routes } from '@angular/router';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

export const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'feed',
    },
    {
      path: 'feed',
      component: NewsFeedComponent
    }
  ]
}];
