import { Component, OnInit, Output } from '@angular/core';
import { Meal } from '../meal';
import { MealService } from '../services/meal.service';
import { PorudzbinaService } from '../services/porudzbina.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  meals: Meal[]=[];
  ml: Meal;
  
constructor(private mealService:MealService){

}
  ngOnInit(): void {
    this.meals=this.mealService.meals;
  }

}
