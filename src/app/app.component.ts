import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    of<number>(1, 2, 3) // Specify the type of values emitted (in this case, numbers)
  .pipe(map(value => value * 2))
  .subscribe(result => console.log(result));
  }
}
