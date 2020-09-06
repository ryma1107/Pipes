import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {

  personnes: Personne[];
  Varpers: Personne;

  constructor() { }

  ngOnInit(): void {
    this.personnes=[
      new Personne(1, 'Alex','FirstAlex', 28, 111111111, 'prof', 'rotating_card_profile3.png'),
      new Personne(2, 'Ryma','FirstRyma', 28,333333333 , 'developper', 'rotating_card_profile.png'),
      new Personne(3, 'Alex2','FirstAlex2', 28,333333333 , 'prof2', '      ')
    ]
  //console.log(this.personnes)
  }

  VarEnvoi(VarP){
    this.Varpers= VarP;
    //console.log(this.Varpers)
  }

}
