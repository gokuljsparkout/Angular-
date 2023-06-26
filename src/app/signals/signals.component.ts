import { NgFor } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions= signal<string []>([])
  counter = signal(0);
  isEqual = computed(()=> this.counter() === 5)

  increment() {
    // this.counter.set(6);
    this.counter.update((oldCounter) => oldCounter + 1);
    this.actions.mutate((oldActions)=> oldActions.push('INcCREMENT'))
    // this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update((oldCounter)=> oldCounter -1)
    this.actions.update((oldActions)=>[...oldActions,'DECREMENT'])
    // this.actions.push('DECREMENT');
  }
}
