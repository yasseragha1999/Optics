import {Component, Input, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {InputText} from 'primeng/inputtext';
import {InputIcon} from 'primeng/inputicon';
import {IconField} from 'primeng/iconfield';
import {ButtonModule} from 'primeng/button';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-optics-table',
  imports: [
    TableModule,
    InputIcon,
    InputText,
    IconField,
    ButtonModule,
    RouterLink,

  ],
  templateUrl: './optics-table.html',
  styleUrl: './optics-table.scss',
  standalone: true,

})
export class OpticsTable implements OnInit {
  @Input() products: any[] = [];
  @Input() cols: any[] = [];
  @Input() caption: string = '';
  @Input() searchFilter: boolean = false;
  @Input() buttonName: string = 'add Button';
  @Input() showButton: boolean = false;
  @Input() buttonNavigate: string | undefined ;


  ngOnInit() {

  }

}
