import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';


@NgModule({
  declarations: [PageListOrdersComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
