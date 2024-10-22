import { Routes } from '@angular/router';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

export const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'feed',
      component: NewsFeedComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'feed',
    },
    // {
    //   path: '**',
    //   redirectTo: 'feed'
    // },
  ]
}];
