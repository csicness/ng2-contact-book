import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Contact } from './contact';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';



@Injectable()

export class ContactService {

    private headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    private contactUrl = 'app/contacts';

    // private handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error);
    //     return Promise.reject(error.message || error);
    // }

    private extractData(res) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

    constructor(private http: Http) {}

    getContacts(): Observable<Contact[]> {
        return this.http.get(this.contactUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    

    getContact(id: number) : Observable<Contact> {
        return this.http.get(this.contactUrl + '/' + id)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    addContact(contact: Contact): Observable<Contact> {
		let body = JSON.stringify(contact);
		let options = new RequestOptions({ headers: this.headers });
		
        return this.http
            .post(this.contactUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
	}

    deleteContact(id: number): Observable<void> {
        const url = `${this.contactUrl}/${id}`;
        
        return this.http.delete(url, {headers: this.headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    updateContact(contact: Contact): Observable<Contact> {
        let body = JSON.stringify(contact);
		let options = new RequestOptions({ headers: this.headers });
        const url = `${this.contactUrl}/${contact.id}`;
		
        return this.http
            .put(url, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    
}