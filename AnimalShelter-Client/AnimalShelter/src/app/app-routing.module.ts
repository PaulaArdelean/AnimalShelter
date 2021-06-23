import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layout';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    data: {
      title: ''
    },
    children: [
      // {
      //   path: 'animals',
      //   loadChildren: () => import('./modules/animals/animals.module').then(a => a.AnimalModule)
      // },
      {
        path: 'users',
        loadChildren: () => import('./modules/users/users.module').then(u => u.UsersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
