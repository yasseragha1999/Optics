import {Component} from '@angular/core';
import {OpticsTable} from '../../../shared/components/optics-table/optics-table';

@Component({
  selector: 'app-orders',
  imports: [
    OpticsTable
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {
  tableHeader: any[] = [
    {field: 'number', header: 'Number'},
    {field: 'customer', header: 'Customer'},
    {field: 'status', header: 'Status'},
    {field: 'totalPrice', header: 'Total Price'},
    {field: 'orderDate', header: 'Order Date'},
    {field: 'action', header: 'Actions'},
  ]
  tableBody: any[] = [
    {
      number: 'OR254277',
      customer: 'Prof. Domingo Shields DDS',
      status: 'Shipped',
      totalPrice: 1588.47,
      orderDate: new Date().toDateString(),
      action: []
    }, {
      number: 'OR254277',
      customer: 'Prof. Domingo Shields DDS',
      status: 'Cancelled',
      totalPrice: 1588.47,
      orderDate: new Date().toDateString(),
      action: []
    }, {
      number: 'OR254277',
      customer: 'Prof. Domingo Shields DDS',
      status: 'Processing',
      totalPrice: 1588.47,
      orderDate: new Date().toDateString(),
      action: []
    }, {
      number: 'OR254277',
      customer: 'Prof. Domingo Shields DDS',
      status: 'New',
      totalPrice: 1588.47,
      orderDate: new Date().toDateString(),
      action: []
    },
  ];
}
