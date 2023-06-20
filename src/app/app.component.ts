import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { debounceTime, mergeMap, mergeMapTo, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  words: any[] = [];

  ngOnInit() {
    const inputElement = document.getElementById('name');

fromEvent(inputElement, 'input')
  .pipe(debounceTime(1000))
  .subscribe(event => console.log(event.target));
  }
}
