import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { LoggerService } from 'src/app/services/logger.service';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedCv: Cv = new Cv();
  date = new Date();
  constructor(private loggerService: LoggerService,

    private helperService: HelperService) { }

  ngOnInit(): void {
    this.helperService.whoAmI();
    this.loggerService.logger('cc je suis le cvComponent');
  }
  findSelectedCv(selectedCv: Cv) {
    this.selectedCv = selectedCv;

  }
}
