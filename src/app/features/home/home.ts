import { Component } from '@angular/core';
import {OpticsTable} from '../../shared/components/optics-table/optics-table';


@Component({
  selector: 'app-home',
  imports: [
    OpticsTable

  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
