import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { SharedModule } from '../shared/shared.module';
import { FormOrderComponent } from './components/form-add-order/form-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { RouterModule } from '@angular/router';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';


@NgModule({
  declarations: [PageListOrdersComponent, FormOrderComponent, PageAddOrderComponent, PageEditOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class OrderModule { }
