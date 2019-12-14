import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss']
})
export class Route1Component implements OnInit {
  data: string;
  constructor(private _activatedRoute:ActivatedRoute) {
    _activatedRoute.paramMap.subscribe(p=>{this.data=p.get("data")});
  }

  ngOnInit() {
  }

}
