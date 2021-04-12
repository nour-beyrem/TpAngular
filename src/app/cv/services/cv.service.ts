import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {

    this.cvs = [
      new Cv(1, 'beyrem', 'nour', 'teacher', 'tim_logo.png', 12345678, 24),
      new Cv(2, 'beyrem', 'marah', 'nurse', '    ', 1111111, 22),

    ];
   }

   getCvs(): Cv[] {
    return this.cvs;
  }
}
