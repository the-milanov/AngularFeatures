import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

// Template-driven forms
//[(ngModel)], #form="ngForm", FormsModule
// classes: ng-touched/untouched, ng-dirty/pristine, ng-valid/invalid
// Template reference input: #name="ngModel" -> name.pristine || name.valid && #form="ngForm"
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {


  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  constructor() { }

  ngOnInit() {
  }

}
