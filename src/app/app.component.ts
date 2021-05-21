import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { getFormGroup } from './app.util';
import { IContactDetails } from './interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(public dialog: MatDialog) { }

  contactList: IContactDetails[] = [];
  isContactListVisible: boolean;
  showNewForm: boolean;
  isEditModeOn: boolean;
  editIndex: number;
  form: FormGroup;
  showList(): void {
    if (this.contactList && this.contactList.length) {
      this.isContactListVisible = !this.isContactListVisible;
    } else {
      this.dialog.open(DialogComponent, {
        data: 'You have not added any contact in the list yet!'
      });
    }
  }

  editContact(index: number): void {
    this.form = getFormGroup();
    this.form.patchValue(this.contactList[index]);
    this.showNewForm = true;
    this.isEditModeOn = true;
    this.editIndex = index;
  }

  deleteContact(index: number): void {
    this.dialog.open(DialogComponent, {
      data: `${this.contactList[index].firstName} 's Account Deleted`
    });
    this.contactList.splice(index, 1);
  }

  deactivateContact(index: number): void {
    this.contactList[index].isActive = false;
    this.dialog.open(DialogComponent, {
      data: 'Account deactivated'
    });
  }

  activateContact(index: number): void {
    this.contactList[index].isActive = true;
    this.dialog.open(DialogComponent, {
      data: 'Account Activated'
    });
  }

  addNewContact(): void {
    this.form = getFormGroup();
    this.showNewForm = true;
  }

  addContact(value: IContactDetails): void {
    if (this.form.status === 'valid') {
      let formValueObject = { ...value, isActive: true }
      this.contactList.push(formValueObject);
      this.showNewForm = false;
      this.dialog.open(DialogComponent, {
        data: 'Contact Added'
      });
    }
  }

  saveChanges(value: IContactDetails): void {
    this.contactList[this.editIndex] = { ...this.contactList[this.editIndex], ...value };
    this.dialog.open(DialogComponent, {
      data: 'Changes Saved'
    });
    this.showNewForm = false;
  }
}
