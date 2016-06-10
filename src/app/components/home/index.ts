import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { FORM_DIRECTIVES } from 'angular2/common';
import { ClientService } from '../shared/index';

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

  

  constructor(public _clientService: ClientService) {
  }

  onDelete(client) {
	  this._clientService.deleteClient(client);
  }
}
