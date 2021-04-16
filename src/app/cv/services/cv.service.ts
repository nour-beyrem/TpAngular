import { Cv } from './../model/cv';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [
    new Cv(1, 'beyrem', 'hend', 'teacher', 'tim_logo.png', 12345678, 24),
    new Cv(2, 'beyrem', 'marah', 'nurse', '    ', 1111111, 22),
    new Cv(3, 'beyrem', 'lina', 'teacher', 'tim_logo.png', 12345678, 24)
  ];
  
  constructor() {

   }

   getCvs(): Cv[] {
    return this.cvs;
  }

  deleteCv(cv: any): void {
    const index = this.cvs.indexOf(cv);
    this.cvs.splice(index, 1);

  }

  getCvById(i: number): Cv {

   const cv: any = this.cvs.find( (cv) => cv.id == i);


    return cv;
  }











}
