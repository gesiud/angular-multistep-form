import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'form/step1',
    loadComponent: () =>
      import('./step1/step1.component').then((mod) => mod.Step1Component),
  },
  {
    path: 'form/step2',
    loadComponent: () =>
      import('./step2/step2.component').then((mod) => mod.Step2Component),
  },
  // {
  //   path: 'form/step3',
  //   loadComponent: () =>
  //     import('./step3/step3.component').then((mod) => mod.Step3Component),
  // },
  {
    path: '',
    redirectTo: 'form/step1',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'form/step1',
    pathMatch: 'full',
  },
];
