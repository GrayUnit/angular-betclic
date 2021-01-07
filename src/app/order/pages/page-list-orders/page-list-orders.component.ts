import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.collection.subscribe((datas) => {
      console.log(datas);
    });
  }

}
