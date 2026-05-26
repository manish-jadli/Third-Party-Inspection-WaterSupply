import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-cards',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.css']
})
export class FeatureCardsComponent implements OnInit {

  constructor() { }

    features = [
    {
      title: 'Inspection Management',
      text: 'Plan, conduct and manage third party inspections seamlessly.',
      icon: 'bi bi-search',
      color: 'cyan',
    },
    {
      title: 'Real-time Dashboard',
      text: 'View real-time progress and key insights on inspections.',
      icon: 'bi bi-graph-up-arrow',
      color: 'green',
    },
    {
      title: 'Reports & Analytics',
      text: 'Generate detailed reports and perform in-depth analytics.',
      icon: 'bi bi-file-earmark-text',
      color: 'purple',
    },
    {
      title: 'Notifications',
      text: 'Stay updated with real-time alerts and notifications.',
      icon: 'bi bi-bell',
      color: 'orange',
    },
    {
      title: 'Documents',
      text: 'Access guidelines, manuals and important documents.',
      icon: 'bi bi-folder2-open',
      color: 'teal',
    },
  ];

  ngOnInit() {
  }

}
