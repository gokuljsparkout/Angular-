import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private intervalSubscription: Subscription;
  ngOnInit() {
    // this.intervalSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
        if (count > 3) {
          observer.error(new Error('Count is Greater than 3'));
        }
      }, 1000);
    });
    this.intervalSubscription = customIntervalObservable.subscribe(
      (count) => {
        console.log(count);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      }
    );
  }
  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }
}
