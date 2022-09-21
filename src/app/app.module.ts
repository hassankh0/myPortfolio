import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceItemComponent } from './experience-list/experience-item/experience-item.component';
import { EducationListComponent } from './education-list/education-list.component';
import { EducationItemComponent } from './education-list/education-item/education-item.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectItemComponent } from './projects-list/project-item/project-item.component';
import { ProjectsFilterPipe } from './projects-list/projects-filter.pipe';
import { CertificationsListComponent } from './certifications-list/certifications-list.component';
import { CertificationItemComponent } from './certifications-list/certification-item/certification-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalInfoComponent,
    ExperienceListComponent,
    ExperienceItemComponent,
    EducationListComponent,
    EducationItemComponent,
    ProjectsListComponent,
    ProjectItemComponent,
    ProjectsFilterPipe,
    CertificationsListComponent,
    CertificationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
