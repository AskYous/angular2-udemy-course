import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  username: string = '';

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Name is' + this.serverName;
  }

  onUpdateServerName($event) {
    this.serverName = $event.target.value;
  }

  resetUserName() {
    this.username = '';
  }

  ngOnInit() {
  }

}
