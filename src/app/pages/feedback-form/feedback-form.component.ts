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
    this.initializeFbForm();
    this.initializeGFbForm();
    this.initializebRForm();
    this.initializeFrForm();
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log( form.value);
    }
  }
  initializeFbForm() {
    this.feedbackForm = new FormGroup({
      formCategory: new FormControl('General Feedback', Validators.required),
    });
  }

  initializeGFbForm() {
    this.generalFeedbackForm = new FormGroup({
      feedback: new FormControl('', Validators.required),
    });
  }
  initializebRForm() {
    this.bugReportForm = new FormGroup({
      bugReportTitle: new FormControl('', Validators.required),
      bugReportDetails: new FormControl('', Validators.required),
    });
  }
  initializeFrForm() {
    this.featureRequestForm = new FormGroup({
      featureRequestTitle: new FormControl('', Validators.required),
      featureRequestDescription: new FormControl('', Validators.required),
    });
  }
}
