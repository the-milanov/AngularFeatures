import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildComponent } from '../viewchild/viewchild.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentProperty:string = 'Parent property';
  @ViewChild(ViewchildComponent) viewChield : ViewchildComponent;
  constructor() { }

  ngOnInit() {
  }
  notifiedFromChield(e){
    alert(e);
  }
  callChieldMethod(){
    this.viewChield.chieldMethod();
  }
}
