import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AboutUsComponent } from '../../../pages/public/about-us/about-us.component';
import { DashboardComponent } from '../../../pages/dashboard/dashboard.component';
import { ContactComponent } from '../../../pages/public/contact/contact.component';
import { DocumentsComponent } from '../../../pages/public/documents/documents.component';
import { InspectionsComponent } from '../../../pages/public/inspections/inspections.component';
import { NotificationsComponent } from '../../../pages/public/notifications/notifications.component';
import { SchemesComponent } from '../../../pages/public/schemes/schemes.component';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(value => !value);
  }

}
