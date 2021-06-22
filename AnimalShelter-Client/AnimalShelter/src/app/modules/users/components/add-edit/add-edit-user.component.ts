import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html'
})

export class AddEditUserComponent implements OnInit {
  public user: User;
  public isEdit = false;

  public userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  }, { validators: [] });

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService,  public modalService: NgbModal) { }
  ngOnInit(): void {
    const userId = this.route.snapshot.params.id;
    this
      .userService
      .getUser(userId)
      .subscribe(resp => {
        console.log('user', resp);
      });
    if (this.user !== null && this.user !== undefined && this.user.id > 0) {
      this.isEdit = true;
      this.userForm.clearValidators();
      this.userForm.patchValue(this.user);
    }
  }

  public submitUserForm(): void {
    if (this.isEdit) {
      this.editUser();
    } else {
      this.addUser();
    }
  }

  private editUser(): void {
    if (!this.userForm.valid) {
      alert('Completati campurile obligatorii.');
    } else {
      const userPayload = this.userForm.value as User;
      userPayload.id = this.user.id;
      this.userService.updateUser(userPayload, this.user.id).subscribe((resp) => {
        if (resp.id <= 0) {
          alert('Ceva nu a functionat, incercati din nou.');
        } else {
          alert('Utilizator modificat cu succes!');
          this.router.navigate(['/users']);
        }
      }, (error) => {
        alert(`${error.error}`);
      });
    }
  }

  private addUser(): void {
    if (!this.userForm.valid) {
      if (this.userForm.errors.passwordValidator) {
        alert('Parolele nu coincid');
      } else {
        alert('Completati campurile obligatorii.');
      }
    } else {
      this.userService.addUser(this.userForm.value as User).subscribe((resp) => {
        if (resp.id <= 0) {
          alert('Ceva nu a functionat, incercati din nou.');
        }
      }, (error) => {
        alert(`${error.error}`);
      });
    }
  }
}
