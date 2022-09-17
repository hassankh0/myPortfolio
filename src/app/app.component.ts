import { Component } from '@angular/core';
import Person from './Person';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  person: Person;
  constructor(private UserSrv: UserService) {
    this.person = UserSrv.getPerson();
  }
}
