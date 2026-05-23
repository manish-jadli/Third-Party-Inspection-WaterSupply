import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';

import { HttpClient } from '@angular/common/http';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone:false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent
  implements OnInit {

  username: any = '';

  totalReports:any = 0;
  pendingReports:any = 0;
  approvedReports:any = 0;
  rejectedReports:any = 0;

  monthlyReports: any[] = [];
  districtReports: any[] = [];

  barChart: any;
  pieChart: any;
  districtChart: any;

  constructor(
    private http: HttpClient
  ) {

    this.username =
      localStorage.getItem('username');

  }

  ngOnInit(): void {

    this.loadDashboard();

  }

  // LOAD DASHBOARD

  loadDashboard() {

    this.http.get<any>(
      'https://localhost:7267/api/dashboard'
    ).subscribe({

      next: (res) => {

        console.log(res);

        // CARDS

        this.totalReports =
          res.totalReports;
       
        this.pendingReports =
          res.pendingReports;

        this.approvedReports =
          res.approvedReports;

        this.rejectedReports =
          res.rejectedReports;

        // CHART DATA

        this.monthlyReports =
          res.monthlyReports;

        this.districtReports =
          res.districtReports;

        // LOAD CHARTS

        this.loadBarChart();

        this.loadPieChart();

        this.loadDistrictChart();

      },

      error: (err) => {

        console.log(err);

        alert('API Error');

      }

    });

  }

  // BAR CHART

  loadBarChart() {

    if (this.barChart) {

      this.barChart.destroy();

    }

    this.barChart =
      new Chart('barChart', {

        type: 'bar',

        data: {

          labels:
            this.monthlyReports.map(
              x => x.month
            ),

          datasets: [

            {

              label: 'Monthly Reports',

              data:
                this.monthlyReports.map(
                  x => x.count
                ),

              backgroundColor: '#0d6efd'

            }

          ]

        },

        options: {

          responsive: true,

          maintainAspectRatio: false

        }

      });

  }

  // PIE CHART

  loadPieChart() {

    if (this.pieChart) {

      this.pieChart.destroy();

    }

    this.pieChart =
      new Chart('pieChart', {

        type: 'pie',

        data: {

          labels: [
            'Approved',
            'Pending',
            'Rejected'
          ],

          datasets: [

            {

              data: [

                this.approvedReports,
                this.pendingReports,
                this.rejectedReports

              ],

              backgroundColor: [

                '#198754',
                '#ffc107',
                '#dc3545'

              ]

            }

          ]

        },

        options: {

          responsive: true,

          maintainAspectRatio: false

        }

      });

  }

  // DISTRICT CHART

  loadDistrictChart() {

    if (this.districtChart) {

      this.districtChart.destroy();

    }

    this.districtChart =
      new Chart('districtChart', {

        type: 'bar',

        data: {

          labels:
            this.districtReports.map(
              x => x.district
            ),

          datasets: [

            {

              label: 'District Reports',

              data:
                this.districtReports.map(
                  x => x.count
                ),

              backgroundColor: '#6610f2'

            }

          ]

        },

        options: {

          responsive: true,

          maintainAspectRatio: false

        }

      });

  }

}