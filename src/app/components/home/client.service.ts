import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Client } from './client';

@Injectable()
export class ClientService {

	private _url = 'MOCK_DATA.json';

	constructor(private _http: Http) {}

	getClients(): Observable<any> {
		return this._http.get(this._url)
			.map(this.extractData)
			.catch(this.handleError);
	}

	addClient(client: Client) {
		let body = JSON.stringify(client);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this._http.post(this._url, body, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	// deleteClient(clientId) {
	// 	const data = JSON.parse(localStorage["clients"]);
	// 	return this._http.delete(this.getClientUrl(clientId));
	// }

	// private getClientUrl(clientId) {
	// 	return this._url + "/clients/" + clientId;
	// }

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
