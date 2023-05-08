import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  showDetails = false;
  count = 0;
  countA = [];

  onClick() {
    this.showDetails = !this.showDetails;
    this.count =+ this.count+1;
    this.countA.push(this.count);
  }
}
