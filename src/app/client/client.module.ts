import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';


@NgModule({
  declarations: [PageListClientsComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
