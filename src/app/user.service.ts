import { Injectable } from '@angular/core';
import Person, { Certificate, Education, Experience, Project, Skill } from './Person';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _person: Person;
  constructor() {
    this._person = new Person("Hassan",
      "KHALIFE",
      "hassan.h.khalife@outlook.com",
      "+33 6 13 17 20 14",
      "https://linkedin.com/in/hassan-khalife-15112000",
      "https://github.com/hassankh0",
      "https://www.facebook.com/hassan.khalife.7771",
      "https://instagram.com/hassan.khalifehh",
      "27 rue Auber, 62100 Calais",
      "Étudiant enthousiaste en génie informatique désireux de contribuer à la réussite de l’équipe au travail acharné, attention au détail et excellentes compétences organisationnelles. Compréhension claire de la planification de projet et de l’attribution des tâches. Motivation à apprendre, à progresser et à exceller dans mon domaine.",
      [new Experience('s', 's', 's', 123, new Date('2020-11-12'), new Date('2020-10-12'), true, 'asdsad', [new Skill('Software', 'Angular', 80, '')]), new Experience('s', 's', 's', 123, new Date('2020-11-12'), new Date('2020-10-12'), false, 'asdsad', [])],
      [],
      [new Education('s', 's', 's', 123, new Date('2020-11-12'), new Date('2020-10-12'), true, 'asdsad', [new Skill('Software', 'Angular', 80, '')]), new Education('s', 's', 's', 123, new Date('2020-11-12'), new Date('2020-10-12'), false, 'asdsad', [])],
      [new Certificate('CCNA1', 'Cisco', new Date('2018-06-01')), new Certificate('CCNA2', 'Cisco', new Date('2018-12-01'))],
      [new Project('Gallery app', 'web', 'https://hassankh0.github.io/Gallery', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBXacHl42Sou8v1X4E1O1t9LgBOb62V2T1g&usqp=CAU', ''),
      new Project('Gallery mobile', 'mobile', '', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBXacHl42Sou8v1X4E1O1t9LgBOb62V2T1g&usqp=CAU', ''),
      new Project('Gallery app', 'web', 'https://hassankh0.github.io/Gallery', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBXacHl42Sou8v1X4E1O1t9LgBOb62V2T1g&usqp=CAU', ''),
      new Project('Gallery mobile', 'mobile', '', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBXacHl42Sou8v1X4E1O1t9LgBOb62V2T1g&usqp=CAU', '')],
      []);

  }


  public getPerson = () => {
    return this._person;
  }
}
