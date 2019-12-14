import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentProperty:string = 'Parent property';
  constructor() { }

  ngOnInit() {
  }
  notifiedFromChield(e){
    alert(e);
  }
}
