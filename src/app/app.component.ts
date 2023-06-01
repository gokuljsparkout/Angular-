import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  isActivated: boolean = false;
  ngOnInit() {
    this.subscription = this.userService.activatedEmitter.subscribe(
      (value: boolean) => {
        this.isActivated = value;
      }
    );
  }
  constructor(private userService: UserService) {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
