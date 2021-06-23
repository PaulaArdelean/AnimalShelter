import { NgModule } from '@angular/core';
import { AnimalsRoutingModule } from './animals-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { NgbModule, NgbDropdownModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AnimalsRoutingModule,
    NgbModule,
    NgbDropdownModule
  ],
  declarations: [
    AnimalsListComponent,
    AddEditAnimalComponent,
  ],
  providers: [
    NgbActiveModal,
    AnimalService
  ]
})
export class AnimalsModule { }
