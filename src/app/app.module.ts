import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DirectivesContainerComponent } from './directives-container/directives-container.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { Route1Component } from './route1/route1.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { FormstestingComponent } from './formstesting/formstesting.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ModulesOverviewComponent } from './modules-overview/modules-overview.component';
import { RxjstestingComponent } from './rxjstesting/rxjstesting.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DirectivesContainerComponent,
    ChildComponent,
    ParentComponent,
    ViewchildComponent,
    Route1Component,
    ImageSliderComponent,
    FormstestingComponent,
    HeroFormComponent,
    ModulesOverviewComponent,
    RxjstestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
