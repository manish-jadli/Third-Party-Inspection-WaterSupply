import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  role: any = '';

  constructor() {
    this.role = localStorage.getItem('userRole');
  }

  menu = [
    {
      icon: 'bi-grid-1x2-fill',
      label: 'Dashboard',
      route: '/app/dashboard',
    },
    {
      icon: 'bi-clipboard-check',
      label: 'Schemes',
      route: '/app/schemes',
    },
    {
      icon: 'bi-card-checklist',
      label: 'Inspections',
      route: '/app/inspection',
    },
    {
      icon: 'bi-map',
      label: 'GIS Monitoring',
      route: '/app/gis-monitoring',
    },
    {
      icon: 'bi-shield-check',
      label: 'NCR Management',
      route: '/app/ncr-management',
    },
    {
      icon: 'bi-file-earmark-text',
      label: 'Reports',
      route: '/app/reports',
    },
    {
      icon: 'bi-people',
      label: 'Contractors & Agencies',
      route: '/app/contractors',
    },
    {
      icon: 'bi-person-gear',
      label: 'Users & Roles',
      route: '/app/users-roles',
    },
    {
      icon: 'bi-bar-chart',
      label: 'Analytics',
      route: '/app/analytics',
    },
    {
      icon: 'bi-cpu',
      label: 'IoT Monitoring',
      route: '/app/iot-monitoring',
    },
    {
      icon: 'bi-folder',
      label: 'Document Library',
      route: '/app/documents',
    },
    {
      icon: 'bi-gear',
      label: 'Settings',
      route: '/app/settings',
    },
  ];
}
