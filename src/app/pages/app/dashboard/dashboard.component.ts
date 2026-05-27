import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  stats = [
    ['bi-water', 'Total Water Supply Schemes', '1,248', '120 New this month', 'blue'],
    ['bi-clipboard2-check', 'Active Inspections', '386', '28 In Progress', 'indigo'],
    ['bi-check-circle-fill', 'Completed Inspections', '862', 'This financial year', 'green'],
    ['bi-graph-up-arrow', 'Quality Compliance', '92.6%', '6.2% from last month', 'green'],
    ['bi-exclamation-triangle-fill', 'NCR Pending', '48', 'Requires Action', 'orange'],
  ];

  districts = [
    ['Dehradun', '95%', '120', 'good'],
    ['Nainital', '93%', '98', 'good'],
    ['Uttarkashi', '90%', '86', 'good'],
    ['Pauri Garhwal', '88%', '112', 'good'],
    ['Haridwar', '85%', '110', 'avg'],
    ['Almora', '78%', '95', 'avg'],
    ['Chamoli', '74%', '67', 'avg'],
    ['Pithoragarh', '65%', '82', 'bad'],
    ['Bageshwar', '62%', '58', 'bad'],
    ['Champawat', '55%', '43', 'bad'],
  ];

  alerts = [
    [
      'bi-exclamation-triangle-fill',
      'NCR Pending',
      '48 inspections have pending NCR',
      '10 min ago',
      'danger',
    ],
    [
      'bi-exclamation-triangle-fill',
      'Inspection Overdue',
      '12 inspections are overdue',
      '30 min ago',
      'warning',
    ],
    [
      'bi-info-circle-fill',
      'New Scheme Added',
      'Dharchula WSS added successfully',
      '1 hr ago',
      'info',
    ],
    ['bi-droplet-fill', 'Quality Alert', '2 water quality tests failed', '2 hr ago', 'success'],
  ];

  inspections = [
    ['Dehradun Valley WSS', 'Dehradun', 'Er. Rohit Bisht', 'Completed', '24 May 2024'],
    ['Bhagirathi WSS', 'Uttarkashi', 'Er. Pooja Nautiyal', 'In Progress', '24 May 2024'],
    ['Kosi Gaad WSS', 'Almora', 'Er. Mahesh Joshi', 'NCR Raised', '23 May 2024'],
    ['Pauri Rural WSS', 'Pauri Garhwal', 'Er. Sandeep Singh', 'Completed', '22 May 2024'],
    ['Chamoli WSS', 'Chamoli', 'Er. Anjali Rawat', 'Yet to Start', '22 May 2024'],
  ];
}
