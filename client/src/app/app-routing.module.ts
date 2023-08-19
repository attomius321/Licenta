import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './features/base/base.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login-view/login-view.module').then(m => m.LoginViewModule)
  },
  {
    path: 'base',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/base/base.module').then(m => m.BaseModule)
      }
    ]
  },
  // {
  //   path: 'teachers',
  // },
  // {
  //   path: 'scheduler'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
