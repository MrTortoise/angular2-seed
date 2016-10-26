import {Routes} from '@angular/router';
import {Home, About, Auth, AuthLogin, AuthLogout, AuthRedirect} from './components';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'auth', component: Auth,
    children: [
      {path: '', component: AuthLogin},
      {path: 'login', component: AuthLogin},
      {path: 'logout', component: AuthLogout},
      {path: 'redirect', component: AuthRedirect}
    ]
  }
  /*
  {path: 'github', component: RepoBrowser,
    children: [
      {path: '', component: RepoList},
      {path: ':org', component: RepoList,
        children: [
          {path: '', component: RepoDetail},
          {path: ':repo', component: RepoDetail}
        ]
      }]
  }
  */
];

