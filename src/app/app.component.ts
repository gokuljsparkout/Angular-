import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  defaultQuestion: string = 'pet';
  answer: string;
  @ViewChild('form') form: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  show() {}
  onSubmit() {
    console.log(this.form);
  }

  ngOnInit() {}
  constructor() {}
}
