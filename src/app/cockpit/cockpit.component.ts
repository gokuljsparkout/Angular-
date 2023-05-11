import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('ServerNameInput')
  ServerNameInput: ElementRef;
  @ViewChild('ServerContentInput')
  ServerContentInput: ElementRef;
  constructor() {}
  ngOnInit() {}
  onAddServer() {
    this.serverCreated.emit({
      // serverName: nameInput.value,
      // serverContent: contentInput.value,
      serverName: this.ServerNameInput.nativeElement.value,
      serverContent: this.ServerContentInput.nativeElement.value,
    });
  }
  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.ServerNameInput.nativeElement.value,
      blueprintContent: this.ServerContentInput.nativeElement.value,
    });
  }
}
