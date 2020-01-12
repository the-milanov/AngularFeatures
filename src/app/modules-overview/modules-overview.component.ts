import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-overview',
  templateUrl: './modules-overview.component.html',
  styleUrls: ['./modules-overview.component.scss']
})
export class ModulesOverviewComponent implements OnInit {
  // Core Module, App Module, Feature Module, Shared Module
  // Declarations: components, directives, pipes used in that module
  // Exports: declaration components, directives and pipes that can be used in modules that import this module
  // Bootstrap: root component
  // Providers: services, guards

  // Routing module, app-routing.module.ts imports components that are part of Routes array, so that they are not in AppModule
  // Feature module, declarations and providers, no exports, business logic
  // Shared/Widget module: exports components, like spinners, icons etc
  // Core/Service, no declarations only services, like auth service

  // ng generate module CustomerDashboard
  constructor() { }

  ngOnInit() {
  }

}
