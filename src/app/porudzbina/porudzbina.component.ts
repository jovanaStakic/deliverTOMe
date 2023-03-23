import { Component } from '@angular/core';
import { PorudzbinaService } from '../services/porudzbina.service';

@Component({
  selector: 'app-porudzbina',
  templateUrl: './porudzbina.component.html',
  styleUrls: ['./porudzbina.component.scss']
})
export class PorudzbinaComponent {
kolicina:number;
constructor(private porudzbinaService: PorudzbinaService){
  this.porudzbinaService.subject.subscribe(length=>{
this.kolicina=length;
  });
}
}
