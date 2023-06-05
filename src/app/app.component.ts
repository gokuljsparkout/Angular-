import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  defaultQuestion: string = 'pet';
  defaultGender: string = 'male';
  answer: string;
  genders: string[] = ['male', 'female'];
  @ViewChild('form') form: NgForm;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.form.form.patchValue({
      userdata: {
        username: suggestedName,
      },
    });
  }
  submitted: boolean = false;

  show() {}
  onSubmit() {
    this.submitted = true;
    this.user.username = this.form.value.userdata.username;
    this.user.email = this.form.value.userdata.email;
    this.user.gender = this.form.value.gender;
    this.user.secretQuestion = this.form.value.secret;
    this.user.answer = this.form.value.questionAnswer;
    this.form.reset(); 
  }

  ngOnInit() {}
  constructor() {}
}
