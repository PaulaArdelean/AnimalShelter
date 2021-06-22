import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddEditUserComponent } from './components/add-edit/add-edit-user.component';
import { UserComponent } from './components/view/user.component';
import { UsersListComponent } from './components/list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    data: {
      title: 'Users'
    }
  },
  {
    path: ':id',
    component: AddEditUserComponent,
    data: {
      title: 'AddUser'
    }
  },
  {
    path: 'view/:id',
    component: UserComponent,
    data: {
      title: 'User'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UsersRoutingModule {}
