import { NgModule } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { UseriRoutingModule } from './useri-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { AddEditUserComponent } from './components/add-edit/add-edit-user.component';
import { NgbModule, NgbDropdownModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './components/single/user.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    UseriRoutingModule,
    NgbModule,
    NgbDropdownModule
  ],
  declarations: [
    UsersListComponent,
    AddEditUserComponent,
    UserComponent
  ],
  providers: [
    NgbActiveModal,
    UserService
  ]
})
export class UsersModule { }
