import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DirectivesContainerComponent } from './directives-container/directives-container.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { Route1Component } from './route1/route1.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DirectivesContainerComponent,
    ChildComponent,
    ParentComponent,
    ViewchildComponent,
    Route1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
