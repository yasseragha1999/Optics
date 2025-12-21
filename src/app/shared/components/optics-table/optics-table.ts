import {Component, Input, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {InputText} from 'primeng/inputtext';
import {InputIcon} from 'primeng/inputicon';
import {IconField} from 'primeng/iconfield';
import {ButtonModule} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {Tag} from 'primeng/tag';
import {TieredMenu} from 'primeng/tieredmenu';
import {MenuItem} from 'primeng/api';


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
    TieredMenu,

  ],
  templateUrl: './optics-table.html',
  styleUrl: './optics-table.scss',
  standalone: true,

})
export class OpticsTable implements OnInit {
  @Input() products: any[] = []
  @Input() cols: any[] = [];
  @Input() caption: string = '';
  @Input() searchFilter: boolean = false;
  @Input() buttonName: string = 'add Button';
  @Input() showButton: boolean = false;
  @Input() buttonNavigate: string | undefined;

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => {
          console.log('Edit');
        }
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
          console.log('Delete');
        }
      }
    ];

  }


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


  onActions() {
    document.getElementById('showActions')
  }

  // onRowEditInit() {
  //
  // }
  //
  // onRowEditSave() {
  //
  // }
  //
  // onRowEditCancel() {
  //
  // }

}
