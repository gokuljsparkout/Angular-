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
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.form.value.userdata.username = suggestedName;
    //This method does not trigger ChangeDetection
    console.log(this.form.value);
    this.form.setValue({
      ...this.form.value,
      userdata: {
        ...this.form.value.userdata,
        username: suggestedName,
      },
    });
  }

  show() {}
  onSubmit() {
    console.log(this.form);
  }

  ngOnInit() {}
  constructor() {}
}
