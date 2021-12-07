import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LeadsModule } from './leads/leads.module';
import { SecurityModule } from './security/security.module';
import { AppRoutingModule } from './routing/routing.module';
import { CustomComponentsModule } from './common/customComponents.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    //third-party modules
    NgbModalModule,
    // Custom modules
    AppRoutingModule,
    LeadsModule,
    SecurityModule,
    CustomComponentsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
