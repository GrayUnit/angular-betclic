import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public collection$: Observable<Order[]>;
  public headers: string[];
  public states = Object.values(StateOrder);
  public btnRoute: BtnI;
  public btnHref: BtnI;
  public btnAction: BtnI;

  constructor(
    private orderService: OrdersService,
    public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.orderService.refresh$.next(true);
    this.collection$ = this.orderService.collection;
    this.headers = [
      'Type',
      'Client',
      'Nb. Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
      'Actions'
    ];
    this.btnRoute = {
      label: 'Add an order',
      route: 'add'
    };
    this.btnHref = {
      label: 'Go to Google',
      href: 'http://www.google.fr'
    };
    this.btnAction = {
      label: 'Open dialogue',
      action: true
    };
  }

  public changeState(item: Order, event) {
    this.orderService.changeState(item, event.target.value).subscribe((res) => {
      // traiter la res de l'api, codes erreur etc...
      item.state = res.state;
    });
  }

  public openPopUp() {
    console.log('open popup');
  }

  public delete(item: Order) {
    this.orderService.delete(item).subscribe(
      (res) => {
        this.orderService.refresh$.next(true);
      }
    )
  }

  public gotoEdit(item: Order) {
    this.router.navigate(['orders', 'edit', item.id]);
  }

}
