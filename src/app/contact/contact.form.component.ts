import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact';

@Component({
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./style.scss']
})

export class ContactFormComponent implements OnInit {
    id: number;
    selectedContact: Contact;
    private sub: any;
    edit_mode: boolean = false;

    constructor(
        router: Router,
        private route: ActivatedRoute,
        private contactService: ContactService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe((params: any) => {
            if (params.hasOwnProperty('id')) {
                this.edit_mode = true;
                this.id = +params['id'];
                this.contactService.getContact(this.id)
                    .subscribe(
                        contact => this.selectedContact = contact
                    );
            } else {
                this.edit_mode = false;
                this.selectedContact = null;
            }
        });
    }

    onSubmit(value: any): void {
        this.contactService.addContact(value);
        this.location.back();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    onUpdate(value: any) {
        Object.assign(this.selectedContact, value);
        this.contactService.updateContact(this.selectedContact);
        this.location.back();
    }

    testClick() {
        console.log(this.selectedContact.first_name);
    }
}