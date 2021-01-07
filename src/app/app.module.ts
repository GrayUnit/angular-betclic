import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiModule } from './ui/ui.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    CoreModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    UiModule,
    HttpClientModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
