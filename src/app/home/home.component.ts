import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { map } from 'rxjs/operators';
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
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is Greater than 3'));
        }
      }, 1000);
    });
    this.intervalSubscription = customIntervalObservable
      .pipe(
        map((data: number) => {
          return 'Round' + (data + 1);
        })
      )
      .subscribe(
        (count) => {
          console.log(count);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Complete');
        }
      );
  }
  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }
}
