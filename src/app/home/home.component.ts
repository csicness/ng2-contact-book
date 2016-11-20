import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;

  constructor(private contactService: ContactService, private router: Router) {
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(
        contacts => this.contacts = contacts
      );
  }

  ngOnInit(): void { 
    this.getContacts();
  }

  onDelete(contact): void {
    this.contactService.deleteContact(contact.id)
      .subscribe(() => {
        this.contacts = this.contacts.filter(c => c !== contact);
      });
  }

}
