import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {

  @Input() CvPersonne1;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.CvPersonne1)
  }

}
