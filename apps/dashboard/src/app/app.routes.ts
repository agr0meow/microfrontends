import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('./widgets/nx/model/nx.routes').then((m) => m.nxRoutes)
  },
];
