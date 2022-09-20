import { Project } from './../Person';
import { UserService } from './../user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  @Input() filterBy?: string = 'all';
  categories:string[] = [];
  projects:Project[]= [];
  constructor(private UserSrv:UserService) { }

  ngOnInit(): void {
    this.projects = this.UserSrv.getPerson().getProjects();
    this.UserSrv.getPerson().getProjects().forEach(element => {
      if (!this.categories.includes(element.getType())) {
        this.categories.push(element.getType());
      }
    });
    console.log(this.categories);
  }

  onChangeFilter(categorie:string){
    this.filterBy = categorie;
  }

}
