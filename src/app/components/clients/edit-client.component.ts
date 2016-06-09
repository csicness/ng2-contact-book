import { Component, OnInit } from 'angular2/core';
import { FormBuilder, ControlGroup } from 'angular2/common';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { ClientService } from '../home/client.service';
import { Client } from '../home/client';

@Component({
	template: require('./editTemplate.html'),
	styles: [require('./styles.scss')],
	directives: [ROUTER_DIRECTIVES],
	providers: [ClientService]
})

export class EditClientComponent implements OnInit {
	myForm: ControlGroup;
	client: Client;

	constructor(
		private _clientService: ClientService,
		private _formBuilder: FormBuilder
	) {}

	ngOnInit(): any {
		let id = '';
		let fbFirstName = '';
		let fbLastName = '';
		let fbPhone = '';
		let fbEmail = '';
		let fbAddress = '';
		let fbCity = '';
		let fbState = '';
		let fbZip = '';

		this.myForm = this._formBuilder.group({
			id,
			firstName: [fbFirstName],
			lastName: [fbLastName],
			phone: [fbPhone],
			email: [fbEmail],
			address: [fbAddress],
			city: [fbCity],
			state: [fbState],
			zip: [fbZip]
		});
	};
}
