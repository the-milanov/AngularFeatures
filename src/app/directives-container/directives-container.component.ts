import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-container',
  templateUrl: './directives-container.component.html',
  styleUrls: ['./directives-container.component.scss']
})
export class DirectivesContainerComponent implements OnInit {
  numbers:number[] =[1,2,3];
  
  constructor() { }

  ngOnInit() {
  }

}
