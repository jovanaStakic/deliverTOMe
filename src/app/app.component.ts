import { Component } from '@angular/core';
import { Meal } from './meal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deliverTOme';
  meals: Meal[]=[];
  
}
