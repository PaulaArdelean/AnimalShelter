import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { LocalUser } from 'src/app/_models/localuser';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public sidebarOpened = false;
  public loggedInUser: LocalUser;

  constructor(config: NgbDropdownConfig, private router: Router, private authenticationService: AuthenticationService) {
    config.placement = 'bottom-right';
  }
  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem('localUser'));
  }

  toggleOffcanvas(): void {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }

  public signOut(): void {
    this.authenticationService.logout();
    this.router.navigate(['/account', 'login']);
  }
}
