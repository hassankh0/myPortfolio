import { Injectable } from '@angular/core';
import Person from './Person';

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
      [],
      [],
      [],
      [],
      [],
      []);

  }


  public getPerson = () => {
    return this._person;
  }
}
