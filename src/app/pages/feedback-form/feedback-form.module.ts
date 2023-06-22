import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackFormComponent } from './feedback-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackFormRoutingModule } from './feedback-form.routing-module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FeedbackFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FeedbackFormRoutingModule,
  ],
  providers: [],
  bootstrap: [],
})
export class FeedbackFormModule {}
