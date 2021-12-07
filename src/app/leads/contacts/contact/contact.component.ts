import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../common/components/toast.service';
import { CONTACTS_URL } from '../../leads.constants';
import { Contact } from '../contacts.component';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() public contact: any = null;
  @Input() public editMode: boolean = false;

  constructor(
    private http: HttpClient,
    public activeModal: NgbActiveModal,
    public toastService: ToastService
  ) {}

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    phone: new FormControl('', []),
  });

  get name() {
    return this.contactForm.get('name');
  }
  get country() {
    return this.contactForm.get('country');
  }

  loadContact(contact: Contact) {
    this.contact = contact;
    this.contactForm.patchValue(contact);
  }

  //#region API operations

  async add() {
    const result = await this.http
      .post(CONTACTS_URL, this.contactForm.value)
      .toPromise();
    if (result) alert('Contact added successfully');
    this.activeModal.close();
  }

  async save() {
    // Put operation is throwing the 404 error
    const result = await this.http
      .post(CONTACTS_URL, this.contactForm.value)
      .toPromise();
    if (result) alert('Contact updated successfully');
    this.activeModal.close();
  }

  async delete() {
    const result = await this.http
      .delete(`${CONTACTS_URL}/${this.contact.id}`)
      .toPromise();
    if (result) alert('Contact deleted successfully');
    this.activeModal.close();
  }

  //#endregion
}
