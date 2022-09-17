import { Component, OnInit } from '@angular/core';
import Person from '../Person';
import { UserService } from '../user.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  person: Person;
  constructor(private UserSrv: UserService) {
    this.person = UserSrv.getPerson();
  }
  ngOnInit(): void {
  }

  goLinkedin = () => {
    window.open(this.person.getLinkedin());
  }
  goGitHub = () => {
    window.open(this.person.getGitHub());
  }
  goInstagram = () => {
  window.open(this.person.getInstagram());
  }
  goFacebook = () => {
    window.open(this.person.getFacebook());
  }

}
