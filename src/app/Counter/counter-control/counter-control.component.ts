import { Component, EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.css']
})
export class CounterControlComponent {
  @Input() counter: number;
  @Output() incremented = new EventEmitter<{number}>();
  @Output() decremented = new EventEmitter<{number}>();



  increment(){
    this.decremented.emit({ number: this.counter++ });
  }

  decrement(){
    this.decremented.emit({ number: this.counter-- });
  }

}
