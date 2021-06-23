import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layout';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'animals',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: 'animals',
        loadChildren: () => import('./modules/animals/animals.module').then(a => a.AnimalsModule)
      },
      // {
      //   path: 'users',
      //   loadChildren: () => import('./modules/users/users.module').then(u => u.UsersModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
