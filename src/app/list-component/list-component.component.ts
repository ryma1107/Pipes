import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  @Input() Personnes;
  constructor() { }

  @Output() VarPersClick = new EventEmitter();

  ngOnInit(): void {
    //console.log(this.Personnes)
  }

  SendToFather(pers: Personne){
      this.VarPersClick.emit(pers);
      //console.log(pers)
      //console.log("okkkk")
  }
}
