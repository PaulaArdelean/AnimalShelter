import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnimalsListComponent } from 'src/app/modules/animals/components/list/animals-list.component';
import { AddEditAnimalComponent } from 'src/app/modules/animals/components/add-edit/add-edit-animal.component';


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
