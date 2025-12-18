import {Component, Input} from '@angular/core';
import {TableModule} from 'primeng/table';
import {InputText} from 'primeng/inputtext';
import {InputIcon} from 'primeng/inputicon';
import {IconField} from 'primeng/iconfield';
import {ButtonModule} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {Tag} from 'primeng/tag';


@Component({
  selector: 'app-optics-table',
  imports: [
    TableModule,
    InputIcon,
    InputText,
    IconField,
    ButtonModule,
    RouterLink,
    Tag,

  ],
  templateUrl: './optics-table.html',
  styleUrl: './optics-table.scss',
  standalone: true,

})
export class OpticsTable {
  @Input() products: any[] = [];
  @Input() cols: any[] = [];
  @Input() caption: string = '';
  @Input() searchFilter: boolean = false;
  @Input() buttonName: string = 'add Button';
  @Input() showButton: boolean = false;
  @Input() buttonNavigate: string | undefined;


  getSeverity(status: string): "success" | "secondary" | "danger" | "warn" | "info" | undefined | null {
    switch (status) {
      case 'Shipped':
        return 'success';
      case 'Cancelled':
        return 'danger';
      case 'Processing':
        return 'warn';
      case 'New':
        return 'info';
      default:
        return 'secondary';
    }
  }


}
