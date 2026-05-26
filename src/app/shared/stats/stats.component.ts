import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

   stats = [
    { value: '12,458', label: 'Total Schemes', icon: 'bi bi-water', color: 'cyan' },
    { value: '9,642', label: 'Inspections Completed', icon: 'bi bi-clipboard-check', color: 'green' },
    { value: '2,816', label: 'Inspections In Progress', icon: 'bi bi-hourglass-split', color: 'purple' },
    { value: '8,933', label: 'Schemes Approved', icon: 'bi bi-check-circle', color: 'orange' },
    { value: '709', label: 'Schemes Requiring Action', icon: 'bi bi-x-circle', color: 'red' },
  ];

  ngOnInit() {
  }

}
