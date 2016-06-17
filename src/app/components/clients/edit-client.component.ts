import { Component, OnInit } from 'angular2/core';
import { FormBuilder, ControlGroup } from 'angular2/common';
import { ROUTER_DIRECTIVES, RouteParams, Router } from 'angular2/router';
import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client';

@Component({
	template: require('./editTemplate.html'),
	styles: [require('./styles.scss')],
	directives: [ROUTER_DIRECTIVES]
})

export class EditClientComponent implements OnInit {
	myForm: ControlGroup;
	client: Client;
	current: string;

	private _clientIndex: number;

	constructor(
		private _clientService: ClientService,
		private _formBuilder: FormBuilder,
		private _routeParams: RouteParams,
		private _router: Router
	) {}

	ngOnInit(): any {
		this._clientService.getClients();
		this._clientIndex = +this._routeParams.get('clientIndex');
		this.client = this._clientService.getClient(this._clientIndex);
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
			first_name: [fbFirstName],
			last_name: [fbLastName],
			phone: [fbPhone],
			email: [fbEmail],
			address: [fbAddress],
			city: [fbCity],
			state: [fbState],
			zip: [fbZip]
		});
	};

	onSubmit(client) {
		this.client = this.myForm.value;
		this._clientService.editClient(this.client, this._clientIndex);
		this.navigateBack();
	}

	private navigateBack() {
		this._router.navigate(['Home']);
	}
}
