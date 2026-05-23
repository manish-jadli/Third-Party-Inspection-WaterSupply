import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone:false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  role: any = '';

  constructor() {

    this.role =
      localStorage.getItem('userRole');

  }

}