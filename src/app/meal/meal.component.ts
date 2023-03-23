import { Component, Input, OnInit, Output } from '@angular/core';
import { Meal } from '../meal';
import { PorudzbinaService } from '../services/porudzbina.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {
   constructor(private porudzbinaService: PorudzbinaService){

   }
  @Input() ml:Meal;
  
 
 addMeal(numb:string){
  this.porudzbinaService.addMeal(Number(numb));
 }
 

  

}
