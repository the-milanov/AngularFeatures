import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  name: string;
  public isAlive: boolean = false;
  public stuff = {
    'alive': this.isAlive,
    'dead': !this.isAlive
  };
  constructor() {}

  ngOnInit() {
    this.name = "William";
  }
  changeBoolean() {
    this.isAlive = !this.isAlive;
  }
}
