import { Education } from './../../Person';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {

  @Input() education: Education;
  constructor() {
  }

  ngOnInit(): void {
  }

}
