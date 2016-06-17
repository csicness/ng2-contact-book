import { Component, OnInit } from 'angular2/core';
import { FormBuilder, ControlGroup } from 'angular2/common';
import { ROUTER_DIRECTIVES, Router } from 'angular2/router';
import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client';

@Component({
	template: require('./template.html'),
	styles: [require('./styles.scss')],
	directives: [ROUTER_DIRECTIVES]
})

export class AddClientComponent implements OnInit {
	myForm: ControlGroup;
	client: Client;
	private _submitted = false;

	constructor(
		private _clientService: ClientService,
		private _formBuilder: FormBuilder,
		private _router: Router
	) {}

	ngOnInit(): any {
		let id = "57391a3b" + randomString(16, '0123456789abcdefghijklmnopqrstuvwxyz');
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
	}

	onSubmit() {
		this.client = this.myForm.value;
		this._clientService.addClient(this.client);
		this._submitted = true;
		this.navigateBack();
	}

	private navigateBack() {
		this._router.navigate(['Home']);
	}


}

function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) {
		result += chars[Math.floor(Math.random() * chars.length)];
	};
    return result;
}
