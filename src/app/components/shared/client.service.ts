import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

import { Client } from './client';

@Injectable()
export class ClientService {

	clients: Client[] = [];

	private _url = 'MOCK_DATA.json';
	private request: Observable<string[]>;

	constructor(private _http: Http) { }

	getClients(): Observable<any[]> {
		if (this.clients && this.clients.length) {
			return Observable.from([this.clients], client => this.clients = client);
		}
		if (!this.request) {
			this.request = this._http.get(this._url)
				.catch(this.handleError)
				.map(this.extractData)
				.map((data: any[]) => {
					this.request = null;
					return this.clients = data;
				});
		}
		return this.request;
	}

	getClientIndex(client) {
		return this.clients.indexOf(client);
	}

	getClient(index: number) {
		return this.clients[index];
	}

	addClient(client: Client) {
		return this.clients.push(client);
		// let body = JSON.stringify(client);
		// let headers = new Headers({ 'Content-Type': 'application/json' });
		// let options = new RequestOptions({ headers: headers });
		// return this._http.post(this._url, body, options)
		// 	.map(this.extractData)
		// 	.catch(this.handleError);
	}

	deleteClient(client) {
		var index = this.clients.indexOf(client);
		return this.clients.splice(index, 1);
		// const data = JSON.parse(localStorage["clients"]);
		// return this._http.delete(this.getClientUrl(clientId));
	}

	// private getClientUrl(clientId) {
	// 	return this._url + "/clients/" + clientId;
	// }

	editClient(client: Client, index: number) {
		return this.clients[index] = client;
	}

	private extractData(res: Response) {
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		let body = res.json();
		return body.clients || {};
	}

	private handleError(error: any) {
		let errMsg = error.message || 'Server Erorr';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}
