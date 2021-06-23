import { OnInit, Component } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  public users: User[] = [];
  public userIdToDelete: number;
  private activeModal: NgbModalRef;

  constructor(private router: Router, private userService: UserService, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.getUsers();
    if (!this.users) {
      alert('A aparut o eroare!');
      this.router.navigate(['/']);
    }
  }

  private getUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  public stergeUser(): void {
    if (this.userIdToDelete > 0) {
      this
        .userService
        .deleteUser(this.userIdToDelete)
        .subscribe(resp => {
          console.log('deleted user: ', resp);
          this.getUsers();
          this.activeModal.close();
        });
    }
  }

  public openUserDeleteModal(content: any, userId: number): void {
    this.userIdToDelete = userId;
    this.activeModal = this
      .modalService
      .open(content);
  }
}
