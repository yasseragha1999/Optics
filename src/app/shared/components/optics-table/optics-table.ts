import {Component, Input, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';




@Component({
  selector: 'app-optics-table',
  imports: [
    TableModule
  ],
  templateUrl: './optics-table.html',
  styleUrl: './optics-table.scss',
  standalone: true,

})
export class OpticsTable implements OnInit {
  @Input() products: any[] = [];

  @Input() caption: string = '';

  @Input() cols: any[] = [];


  ngOnInit() {

  }

}
