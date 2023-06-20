import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // of<number>(1, 2, 3,4,5,6) // Specify the type of values emitted (in this case, numbers)
  // .pipe(filter(value => value%2 !== 0))
  // .subscribe(result => console.log(result));

  interval(1000).pipe(take(5)).subscribe(result => console.log(result))
  }
}
