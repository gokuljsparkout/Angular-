import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
 

  constructor() { }
  @Input() set unless(condition : boolean){
    if(!condition){

    }
    else{
      
    }

  }

}
