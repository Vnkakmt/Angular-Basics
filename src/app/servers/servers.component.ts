import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created! Name is';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];

  username: string = '';
  usernameEmpty = true;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onChange(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
    if (this.username != null || this.username != '') {
      this.usernameEmpty = false;
    } else {
      this.usernameEmpty = true;
    }
  }

  clear() {
    this.username = null;
    this.usernameEmpty = true;
  }
}
