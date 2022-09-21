import { Experience } from './../Person';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {

  experiences: Experience[];
  constructor(private UserSrv: UserService) {
  }

  ngOnInit(): void {
    this.experiences = this.UserSrv.getPerson().getExperiences();
  }

}
