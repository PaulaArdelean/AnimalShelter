import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
  public user: User;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService,
              public modalService: NgbModal) { }
  ngOnInit(): void {
    const userId = this.route.snapshot.params.id;
    this
      .userService
      .getUser(userId)
      .subscribe(resp => {
        console.log('user', resp);
      });
    if (!this.user || !this.user.id || this.user.id <= 0) {
      alert('Invalid user');
      this.router.navigate(['/users']);
    }
  }
}


