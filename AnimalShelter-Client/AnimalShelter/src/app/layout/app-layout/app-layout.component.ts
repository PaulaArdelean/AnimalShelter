import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LocalUser } from 'src/app/_models/localuser';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent implements OnInit, AfterViewInit {

  public loggedInUser: LocalUser;

  constructor() { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }
}
