# Encora

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Leads Manager

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-anpdz1)

Instructions on how to navigate

1. The landing page of the application is the login form
   1.1 credentials are prefilled in the login form
   1.2 the email is validated against the database (api call)
   1.3 sign-in button is only enabled when form is validated
   1.4 password validation errors are shown whne it doesn't meet the criteria

2. After signin, we navigate to company listing page
   2.1 doubled click on any row to show the contacts listing for the specific company (filtered by the companyId)

3. Contacts listing
   3.1 double click on any contact to open the contact form
   3.2 use add button to add a new contact
   3.3 use the delete/save/add buttons inside the form for respective operations

