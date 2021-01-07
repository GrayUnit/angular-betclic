import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { SharedModule } from '../shared/shared.module';
import { FormAddOrderComponent } from './components/form-add-order/form-add-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';


@NgModule({
  declarations: [PageListOrdersComponent, FormAddOrderComponent, PageAddOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class OrderModule { }
