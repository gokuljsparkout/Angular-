import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  serverCreated = 'No Server was Created';
  userName = '';
  allowReset=true;
  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreated = 'Server Created';
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onClick() {
  this.userName = '';
  }
}
