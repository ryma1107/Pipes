import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css',
              './pe-icon-7-stroke.css',
              './rotating-card.css'
              ]
})
export class CarteVisiteComponent implements OnInit {
  nomForm:string="";
  PrenForm:string="";
  JobForm:string="";
  CitationForm:any="";
  DescrTravailForm:any="";
  keyWords:any="";
  url_image;

    @Input() VarPersFinal : Personne;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.VarPersFinal)
  }
}
