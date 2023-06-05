import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  defaultSubscription = 'Advanced';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  submitted: boolean = false;
  user = {
    email: '',
    subscription: '',
    password: '',
  };
  pwd = '';

  check() {
    console.log('change');
    if (this.pwd.length < 8) {
      // Update the validation status of the password field to 'INVALID'
      this.form.controls['password'].setErrors({ invalid: true });
    } else {
      // Reset the validation status of the password field
      this.form.controls['password'].setErrors(null);
    }
  }

  onSubmit() {
    if (this.form.valid === false) {
      alert('Form is invalid');
    } else {
      console.log(this.form);
      this.user.email = this.form.value.email;
      this.user.subscription = this.form.value.subscription;
      this.user.password = this.form.value.password;
      this.submitted = true;
      // this.form.reset();
    }
  }
  ngOnInit() {}

  constructor() {}
}
