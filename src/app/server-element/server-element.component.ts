import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string ,content: string };
  //With this element property is declared properly
  //Now any parent component hosting this component
  //Is able to bind to this element
  constructor() {}

  ngOnInit() {}
}
