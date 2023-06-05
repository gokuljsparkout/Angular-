import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames= ['Anna', 'Chris'];

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    console.log(this.forbiddenUsernames.indexOf(control.value));
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
    
      return {
        nameIsForbidden: true,
      };
    }
    return null;
  }
  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('Gokul', [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(null, [Validators.email, Validators.required]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }

  constructor() {}
}
