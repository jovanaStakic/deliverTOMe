import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundDirective]'
})
export class BackgroundDirectiveDirective {

  constructor(element: ElementRef) { 
    element.nativeElement.style.backgroundColor="#FEF8DD";
   element.nativeElement.onmouseover = function(){  
      element.nativeElement.style.backgroundColor = "#F7D8BA";
   
}
element.nativeElement.onmouseout = function(){ 
  element.nativeElement.style.backgroundColor = "#FEF8DD";

}
  }

}
