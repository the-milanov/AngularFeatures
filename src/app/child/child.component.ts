import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() dataFromParent: string;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dataSharing: DataSharingService) { }

  ngOnInit() {
  }
  onClickService(){
    this.dataSharing.count++;
  }
  onClick(){
    this.notify.emit("data");
  }
}
