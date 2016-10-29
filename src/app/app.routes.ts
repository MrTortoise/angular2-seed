import {Routes} from '@angular/router';
import {Home, About, Auth, AuthLogin, AuthLogout, AuthLoginExternal} from './components';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'auth', component: Auth,
    children: [
      {path: 'login', component: AuthLogin,
        children: [
          {path: 'external', component: AuthLoginExternal}
        ]
      }
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

