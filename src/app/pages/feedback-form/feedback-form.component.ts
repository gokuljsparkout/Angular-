import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'],
})
export class FeedbackFormComponent {
  feedbackForm!: FormGroup;
  generalFeedbackForm!: FormGroup;
  bugReportForm!: FormGroup;
  featureRequestForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      formType: new FormControl('General Feedback', Validators.required),
    });
    this.generalFeedbackForm = new FormGroup({
      feedback: new FormControl('',Validators.required),
    });
    this.bugReportForm = new FormGroup({
      bugReportTitle: new FormControl('',Validators.required),
      bugReportDetails: new FormControl('',Validators.required),
    });
    this.featureRequestForm = new FormGroup({
      featureRequestTitle: new FormControl('',Validators.required),
      featureRequestDescription: new FormControl('',Validators.required),
    });
  }

  onSubmit(choice : number){
    switch(choice){
      case 1 : console.log(this.generalFeedbackForm.value);
      break;
      case 2 : console.log(this.bugReportForm.value);
      break;
      case 3 : console.log(this.featureRequestForm.value);
      break;
      default : console.log('end');
      break;
    }

  }
}
