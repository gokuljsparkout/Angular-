import { AfterViewInit, Component,ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit {
  message: string = 'Hello From Parent Component';
  @ViewChild(ChildComponent) childComponent: ChildComponent;
  ngAfterViewInit() {
    this.childComponent.receiveData(this.message);
  }
}
