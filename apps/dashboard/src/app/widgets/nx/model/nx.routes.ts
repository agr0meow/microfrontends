import { Routes } from '@angular/router';

export const nxRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../ui/nx-welcome.component')
  },
  {
    path: 'research',
    loadComponent: () => import('../ui/nx-children.component')
  }
]
