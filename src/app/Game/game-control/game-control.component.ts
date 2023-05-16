import { Component, EventEmitter, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  private intervalRef;
  @Output() addNumber = new EventEmitter();
  start() {
    this.intervalRef = setInterval(() => {
      this.addNumber.emit();
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalRef);
  }
}
