import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router, RouteParams } from 'angular2/router';
import { FORM_DIRECTIVES } from 'angular2/common';
import { ClientService } from '../shared/index';
import { Client } from '../shared/client';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES, ...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./template.html')
})

export class Home {
  trashIcon = 'img/trashcan.png';
  editIcon = 'img/pencil.png';
  selectedClient: Client;

  constructor(
    public _clientService: ClientService,
    private _routeParams: RouteParams,
    private _router: Router) {
  }

  onDelete(client) {
	  this._clientService.deleteClient(client);
  }

  onSelect(client: Client) {
    this.selectedClient = client;
    let index = this._clientService.getClientIndex(client);
    this._router.navigate(['EditClient', { clientIndex: index }]);
  }
}
