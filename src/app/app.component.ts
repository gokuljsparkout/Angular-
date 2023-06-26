import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { debounceTime, mergeMap, mergeMapTo, take } from 'rxjs/operators';
import { DefaultComponent } from './default/default.component';
import { SignalsComponent } from './signals/signals.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [DefaultComponent, SignalsComponent],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
