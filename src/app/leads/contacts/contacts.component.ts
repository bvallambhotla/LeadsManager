import { HttpClient } from '@angular/common/http';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SortableHeader } from '../../common/directives/sortableHeader.directive';
import { CONTACTS_URL } from '../leads.constants';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}

  private data: Contact[];

  companyName: string | null;
  contacts: Contact[];

  @ViewChildren(SortableHeader) headers: QueryList<SortableHeader>;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('companyid');
    this.companyName = this.route.snapshot.paramMap.get('companyname');

    // Get the list of all contacts and filter by company id
    this.http.get(CONTACTS_URL).subscribe((data: any) => {
      data = data.filter((y: any) => y.companyId == id);
      this.data = data;
      this.contacts = data;
    });
  }

  gotoCompanies() {
    this.router.navigate(['/companies']);
  }

  //#region "Table events"

  rowClick(contact: Contact) {
    // Launch the contact form in popup
    console.log('Row double clicked', contact);
    const modalRef = this.modalService.open(ContactComponent);
    modalRef.componentInstance.editMode = true;
    modalRef.componentInstance.loadContact(contact);
  }

  add() {
    // Launch the contact form in popup
    const modalRef = this.modalService.open(ContactComponent);
    modalRef.componentInstance.editMode = false;
  }

  onSort({ column, direction }: any) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.contacts = this.data;
    } else {
      this.contacts = [...this.data].sort((a: any, b: any) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  //#endregion
}

export interface Contact {
  id: number;
  name: string;
  country: string;
  companyId: string;
  phone: string;
}
