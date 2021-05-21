import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IContactDetails } from '../interfaces';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input('contactDetails') set contactInfo(value: IContactDetails[]) {
    this.contactDetails = value;
  }
  @Output() deleteContact = new EventEmitter();
  @Output() deActivateContact = new EventEmitter();
  @Output() editContact = new EventEmitter();
  @Output() activateContact = new EventEmitter();
  contactDetails: IContactDetails[];
  constructor() { }

  ngOnInit(): void {
  }

  deleteSelectedContact(index: number): void {
    this.deleteContact.emit(index);
  }

  deActivateSelectedContact(index: number): void {
    this.deActivateContact.emit(index);
  }

  editSelectedContact(index: number): void {
    this.editContact.emit(index);
  }

  activateSelectedContact(index: number): void {
    this.activateContact.emit(index);
  }
}
