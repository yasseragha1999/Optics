import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {Ripple} from 'primeng/ripple';
import {Menubar} from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, Menubar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Orders',
        icon: 'pi pi-align-center',
      },
      {
        label: 'Customers',
        icon: 'pi pi-home',
      },

    ];
  }
}
