import { Component, EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.css']
})
export class CounterControlComponent {
  @Input() counter: number;
  @Output() incremented = new EventEmitter<{counter:number}>();
  @Output() decremented = new EventEmitter<{counter:number}>();


  increment() {
    this.counter++;
    this.incremented.emit({ counter: this.counter });
  }
  
  decrement() {
    this.counter--;
    this.decremented.emit({ counter: this.counter });
  }

}
