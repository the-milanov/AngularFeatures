import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          left: 0,
          opacity: 1,
          backgroundColor: 'yellow'
        })
      ),
      state(
        'closed',
        style({
          left: '300px',
          opacity: 0.5,
          backgroundColor: 'green'
        })
      ),
      transition('open <=> closed', [animate('1s 0s ease-out')])
    ]),
    trigger('inOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class ImageSliderComponent implements OnInit {
  isOpen = true;
  isVisible = true;
  toggle(){
    this.isOpen = !this.isOpen;
  }
  constructor() {}

  ngOnInit() {}
}
