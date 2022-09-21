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
      "Enthusiastic software engineer student eager to contribute to team success throght hard work, attention to detail and excellent organizational skills. Clear understanding of project planning and tasks assignment .Motivated to learn, grow and excel in my domain.",
      [new Experience('Full-Stack Developer', 'LASeR', 'Lebanon', 0, new Date(), new Date('2021-04-01'), true, "Learning and developing the capabilities of a full-stack developer, mastering different types of technology font-end and back-end", [new Skill('web', 'Angular', 80, ''), new Skill('web', 'NodeJS', 80, ''), new Skill('web', '.Net Core', 80, ''), new Skill('web', 'ReactJs', 80, ''), new Skill('web', 'MS SQL', 80, ''), new Skill('web', 'HTML, CSS, JS, TS', 80, '')]),
      new Experience('Mobile Developer', 'ICHTUS IT', 'Lille', 59000, new Date('2022-07-18'), new Date('2022-06-18'), false, 'Learning and developing the capabilities of a  mobile developer, mastering different types of technology font-end and back-end', [new Skill('Front-end', 'Ionic', 80, ''), new Skill('front-end', 'Angular', 80, ''), new Skill('back-end', 'NodeJS', 80, ''), new Skill('back-end', 'Strapi', 80, '')])],
      [],
      [new Education('Diploma in Computer Engineering', 'Eilco', 'Calais', 62100, new Date('2021-02-25'), new Date(), true, '', []),
      new Education('Software Engineering', 'Antonine University', 'Baabda, Lebanon', 0, new Date('2018-09-01'), new Date('2020-12-23'), false, '', [])],
      [new Certificate('CCNA1', 'Cisco', new Date('2019-06-01')),
      new Certificate('CCNA2', 'Cisco', new Date('2019-12-01')),
      new Certificate('CCNA3', 'Cisco', new Date('2020-05-01')),
      new Certificate('CCNA4', 'Cisco', new Date('2020-06-01')),
      new Certificate('Robotics Competition - Automation Car', 'NXP', new Date('2019-07-01')),
    new Certificate('FLL','First Lego League Lebanon',new Date('2014-06-01'))],
      [new Project('Gallery app', 'web', 'https://hassankh0.github.io/Gallery', '../assets/Gallery-app.png', ''),
       new Project('University managment System', 'web','','','')],
      []);

  }


  public getPerson = () => {
    return this._person;
  }
}
