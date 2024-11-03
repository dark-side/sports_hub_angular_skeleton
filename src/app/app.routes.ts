import { Routes } from '@angular/router';
import { ArticleComponent } from './components/layout/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NewsFeedComponent } from './components/layout/news-feed/news-feed.component';

export const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'log-in',
      component: LoginComponent
    },
    {
      path: 'sign-up',
      component: LoginComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'feed'
    },
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: 'article/:id',
          component: ArticleComponent
        },
        {
          path: 'feed',
          component: NewsFeedComponent
        }
      ]
    },
    // {
    //   path: '**',
    //   redirectTo: 'feed'
    // }
  ]
}];
