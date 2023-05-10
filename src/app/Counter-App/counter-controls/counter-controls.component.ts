import { Component, EventEmitter, Input, Output } from '@angular/core';
import { refCount } from 'rxjs';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  @Input() count: number;
  @Output() incremented = new EventEmitter<{count:number}>();
  @Output() decremented = new EventEmitter<{count:number}>();


  increment() {
    this.count++;
    this.incremented.emit({count:this.count});
  }

  decrement() {
    this.count--;
    this.incremented.emit({count:this.count});
  }
}
