import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AnimalsListComponent,
    data: {
      title: 'Animals'
    }
  },
  {
    path: ':id',
    component: AddEditAnimalComponent,
    data: {
      title: 'AddAnimal'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AnimalsRoutingModule {}
