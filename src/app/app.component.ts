import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  onSubmit() {
    console.log(this.signupForm);
  }
  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('Gokul', Validators.required),
        email: new FormControl(null, [Validators.email, Validators.required]),
      }),
      gender: new FormControl('male'),
    });
  }

  constructor() {}
}
