import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import Person from '../Person';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  person:Person;
  constructor(private UserSrv: UserService) {
    this.person=UserSrv.getPerson();
  }

  ngOnInit(): void {
  }

}
