import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Meal } from '../meal';

@Injectable({
  providedIn: 'root'
})
export class PorudzbinaService {
  brojJelaUPorudzbini:number=0;
    subject=new BehaviorSubject<number>(0);
  constructor() { 
   

  }
  addMeal(kolicina:number){
   console.log("S"+kolicina);
   
    this.brojJelaUPorudzbini+=kolicina;
    this.subject.next(this.brojJelaUPorudzbini);
  }
}
