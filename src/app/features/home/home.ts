import {Component} from '@angular/core';
import {OpticsTable} from '../../shared/components/optics-table/optics-table';

interface Data {
  name: string;
  code: string;
  category: string;
  quantity: number;
}

@Component({
  selector: 'app-home',
  imports: [
    OpticsTable

  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  nameCaption: string = 'Home';
  cols: any[] = [
    {field: 'code', header: 'Code'},
    {field: 'name', header: 'Name'},
    {field: 'category', header: 'Category'},
    {field: 'quantity', header: 'Quantity'}
  ];
  product: Data[] = [
    {code: '511', name: 'Laptop', category: 'Mobile', quantity: 10,},
    {code: '512', name: 'Laptop', category: 'Mobile', quantity: 11,},
    {code: '513', name: 'Laptop', category: 'Mobile', quantity: 12,},
    {code: '514', name: 'Laptop', category: 'Mobile', quantity: 13,}
  ]
}
