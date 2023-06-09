import { NgFor } from '@angular/common';
import {
  Component,
  OnInit,
  computed,
  effect,
  signal,
  untracked,
} from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent implements OnInit {
  actions = signal<string[]>([]);
  counter = signal(0);
  //if equal is true....effect wont trigger....effect wont trigger for the same value
  isEqual = computed(() => this.counter() === 5);
  constructor() {
    effect(() => {
      console.log('Counter value', this.counter());
      //if a signal state is used inside effect...
      //the signal state becomes a dependency implicitly

      //if u want to use a signal inside effect but it not as a dependency...
      //use untracked()

      if (this.counter() === 5) {
        console.log('Counter value is equal 5!');
      }
    });
  }
  ngOnInit() {}

  increment() {
    // this.counter.set(6);
    this.counter.update((oldCounter) => oldCounter + 1);
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
    // this.actions.push('INCREMENT');
  }

  decrement() {
    // this.counter.update((oldCounter) => oldCounter - 1);
    this.counter.set(5);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
    // this.actions.push('DECREMENT');
  }
}
