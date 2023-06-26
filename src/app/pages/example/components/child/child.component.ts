import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  message!: string ;

  receiveData(data: any) {
    console.log(data);
    this.message = data;
  }
}
