import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = 'No Server was Created';
  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }

  ngOnInit() {}

  onServerCreate() {
    this.serverCreated = 'Server Created';
  }
}
