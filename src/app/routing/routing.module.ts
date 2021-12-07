import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from '../leads/companies/companies.component';
import { ContactComponent } from '../leads/contacts/contact/contact.component';
import { ContactsComponent } from '../leads/contacts/contacts.component';
import { LoginComponent } from '../security/login/login.component';

// Define all the routes here
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'contacts/:companyid/:companyname', component: ContactsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
