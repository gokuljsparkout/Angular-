import { Component } from '@angular/core';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent {
  constructor(){
    setTimeout(()=>this.setShow(),2000)
  }
  setShow(){
    this.show=true;
  }
  show=false;

}
