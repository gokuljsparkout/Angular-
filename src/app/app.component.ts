import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { mergeMap, mergeMapTo, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  words: any[] = [];

  ngOnInit() {
    of('Hello', 'World')
      .pipe(mergeMap((value) => of(value.split(''))))
      .subscribe((result) => {
        console.log(result);
        this.words?.push(...result);
      });
    console.log(this.words);
  }
}
