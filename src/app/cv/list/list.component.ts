import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() forwardSelectedCv = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  forwardCv(selectedCv: Cv) {
    this.forwardSelectedCv.emit(selectedCv);
  }
}
