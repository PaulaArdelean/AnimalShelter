import { NgModule } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { AddEditUserComponent } from './components/add-edit/add-edit-user.component';
import { NgbModule, NgbDropdownModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersListComponent } from './components/list/users-list.component';
import { UserComponent } from './components/view/user.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    UsersRoutingModule,
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
