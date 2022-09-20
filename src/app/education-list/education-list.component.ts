import { Education } from './../Person';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {

  educations: Education[];
  constructor(private UserSrv: UserService) {
    this.educations = this.UserSrv.getPerson().getEducations();
  }
  ngOnInit(): void {
  }

}
