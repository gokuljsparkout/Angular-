import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  statusImg: string = '';

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.setStatusImg();
    this.accountService.statusUpdated.emit(status)
    // this.loggingService.logStatusChange(status);
  }
  ngOnInit() {
    this.setStatusImg();
  }

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {}
  setStatusImg() {
    switch (this.account.status) {
      case 'active':
        this.statusImg =
          'https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png';
        break;
      case 'inactive':
        this.statusImg =
          'https://www.freepnglogos.com/uploads/dot-png/file-location-dot-red-svg-wikipedia-0.png';
        break;
      case 'unknown':
        this.statusImg =
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1024px-Location_dot_grey.svg.png';
        break;
      case 'hidden':
        this.statusImg =
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1024px-Location_dot_grey.svg.png';
        break;
      default:
        this.statusImg = 'https://example.com/default_image.png';
        break;
    }
  }
}
