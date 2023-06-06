import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  projectStatus = ['Stable', 'Critical', 'Finished'];

  forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return {
        forbiddenName: true,
      };
    }
    return null;
  }
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'g@g.com') {
          resolve({
            forbiddenEmail: true,
          });
        }
        resolve(null);
      }, 1500);
    });
  }

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        this.forbiddenProjectName.bind(this),
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        [this.forbiddenEmail.bind(this)]
      ),
      status: new FormControl('Critical'),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value.projectName);
  }
}
