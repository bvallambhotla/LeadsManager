import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponentsModule } from '../common/customComponents.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CompaniesComponent } from './companies/companies.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    CustomComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [CompaniesComponent, ContactsComponent, ContactComponent],
})
export class LeadsModule {}
