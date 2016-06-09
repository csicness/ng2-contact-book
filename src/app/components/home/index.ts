import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { FORM_DIRECTIVES } from 'angular2/common';
import { ClientService } from './client.service';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES, ...ROUTER_DIRECTIVES],
  providers: [ClientService],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./template.html')
})

export class Home implements OnInit {
  trashIcon = 'img/trashcan.png';
  editIcon = 'img/pencil.png';

  errorMessage: string;
  clients: any[];

  constructor(private _clientService: ClientService) {
    this.clients = this.clients;
  }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
	  this._clientService.getClients().subscribe(
		  clients => this.clients = clients,
		  error => this.errorMessage = <any>error
	  );
  }

  onDelete(client) {
    var index = this.clients.indexOf(client);
    this.clients.splice(index, 1);
  }
}
