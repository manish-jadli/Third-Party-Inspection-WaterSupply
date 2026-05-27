import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  username: any = '';

  constructor() {
    this.username = localStorage.getItem('username');
  }

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');

    if (sidebar?.classList.contains('collapsed')) {
      sidebar.classList.remove('collapsed');
    } else {
      sidebar?.classList.add('collapsed');
    }
  }

  logout() {
    if (confirm('Are you sure to logout?')) {
      localStorage.clear();

      window.location.href = '/';
    }
  }
}
