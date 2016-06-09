import { Component, OnInit, Input } from 'angular2/core';
import { FormBuilder, ControlGroup } from 'angular2/common';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { ClientService } from '../home/client.service';
import { ClientList } from '../home/client-list';
import { Client } from '../home/client';

@Component({
	template: require('./template.html'),
	styles: [require('./styles.scss')],
	providers: [ClientService],
	directives: [ROUTER_DIRECTIVES]
})

export class AddClientComponent implements OnInit {
	@Input() clients: any[];
	myForm: ControlGroup;
	client: Client;
	clientList: any[];
	private _submitted = false;

	constructor(
		private _clientService: ClientService,
		private _formBuilder: FormBuilder
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
			firstName: [fbFirstName],
			lastName: [fbLastName],
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
		console.log(this.client);
		ClientList.push(this.client);
		this._submitted = true;
	}


}

function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) {
		result += chars[Math.floor(Math.random() * chars.length)];
	};
    return result;
}
