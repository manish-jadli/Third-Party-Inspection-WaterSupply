import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reports: any[] = [];

  role: any = '';

  reportModel: any = {

    id: 0,
    schemeName: '',
    district: '',
    month: '',
    remark: '',
    status: 'Pending',
    rejectedBy: '',
    pdfFile: null

  };

  constructor(
    private http: HttpClient
  ) {

    this.role =
      localStorage.getItem('userRole');
      console.log(localStorage.getItem('userRole'));
      

  }

   schemes = [
    { code: 'UK/WSS/2024/0001', name: 'Dehradun Valley WSS', district: 'Dehradun', block: 'Vikasnagar', status: 'Completed', progress: 100, population: '25,430' },
    { code: 'UK/WSS/2024/0002', name: 'Bhagirathi WSS', district: 'Uttarkashi', block: 'Bhatwari', status: 'In Progress', progress: 68, population: '18,750' },
    { code: 'UK/WSS/2024/0003', name: 'Alaknanda WSS', district: 'Rudraprayag', block: 'Tilwara', status: 'Under Construction', progress: 45, population: '12,300' },
    { code: 'UK/WSS/2024/0004', name: 'Pauri Rural WSS', district: 'Pauri Garhwal', block: 'Pauri', status: 'Under Construction', progress: 32, population: '22,100' },
    { code: 'UK/WSS/2024/0005', name: 'Chamoli Integrated WSS', district: 'Chamoli', block: 'Gopeshwar', status: 'Completed', progress: 100, population: '9,850' },
    { code: 'UK/WSS/2024/0006', name: 'Haridwar Rural WSS', district: 'Haridwar', block: 'Laksar', status: 'Non Functional', progress: 0, population: '15,600' }
  ];

  inspections = [
    { id: 'INSP/2024/0001', scheme: 'Dehradun Valley WSS', district: 'Dehradun', type: 'Structural', agency: 'ABC Inspection Pvt. Ltd.', date: '24 May 2024', status: 'Completed', score: '92%', ncr: 0 },
    { id: 'INSP/2024/0002', scheme: 'Bhagirathi WSS', district: 'Uttarkashi', type: 'Hydraulic', agency: 'Vertex Engineers', date: '24 May 2024', status: 'In Progress', score: '78%', ncr: 2 },
    { id: 'INSP/2024/0003', scheme: 'Alaknanda WSS', district: 'Rudraprayag', type: 'Quality', agency: 'Sigma Infra Services', date: '23 May 2024', status: 'Completed', score: '88%', ncr: 1 },
    { id: 'INSP/2024/0004', scheme: 'Pauri Rural WSS', district: 'Pauri Garhwal', type: 'Structural', agency: 'ABC Inspection Pvt. Ltd.', date: '22 May 2024', status: 'Completed', score: '95%', ncr: 0 },
    { id: 'INSP/2024/0005', scheme: 'Chamoli Integrated WSS', district: 'Chamoli', type: 'Mechanical', agency: 'Vertex Engineers', date: '22 May 2024', status: 'Pending', score: '-', ncr: 0 },
    { id: 'INSP/2024/0006', scheme: 'Haridwar Rural WSS', district: 'Haridwar', type: 'Hydraulic', agency: 'Sigma Infra Services', date: '21 May 2024', status: 'NCR Raised', score: '-', ncr: 3 }
  ];

  statusClass(status: string): string {
    return status.toLowerCase().replaceAll(' ', '-');
  }

  ngOnInit(): void {

    this.getReports();

  }

  // GET REPORTS

  getReports() {
    
    this.http.get<any>(
      'https://localhost:7267/api/Reports/report',
      {
    headers: {

      Authorization:
        'Bearer ' +
        localStorage.getItem('token')

    }
  }
    ).subscribe({

      next: (res) => {

        this.reports = res;
        console.log(this.reports);

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  // FILE CHANGE

  onFileChange(event: any) {

    this.reportModel.pdfFile =
      event.target.files[0];

  }

  // SAVE REPORT

  saveReport() {

    const formData =
      new FormData();

    formData.append(
      'Id',
      this.reportModel.id
    );

    formData.append(
      'SchemeName',
      this.reportModel.schemeName
    );

    formData.append(
      'District',
      this.reportModel.district
    );

    formData.append(
      'Month',
      this.reportModel.month
    );

    formData.append(
      'Remark',
      this.reportModel.remark
    );

    formData.append(
      'Status',
      this.reportModel.status
    );

    if (this.reportModel.pdfFile) {

      formData.append(
        'PdfFile',
        this.reportModel.pdfFile
      );

    }

    let apiUrl = '';

    if (this.reportModel.id == 0) {

      apiUrl =
        'https://localhost:7267/api/report';

    }
    else {

      apiUrl =
        'https://localhost:7267/api/report/update';

    }

    this.http.post(
      apiUrl,
      formData
    ).subscribe({

      next: () => {

        alert('Report Saved Successfully');

        this.getReports();

        this.resetForm();

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  // EDIT REPORT

  editReport(report: any) {

    this.reportModel = {

      ...report

    };

  }

  // APPROVE REPORT

  approveReport(report: any) {

    const remark =
      prompt('Enter Approval Remark');

    const body = {

      id: report.id,
      status: 'Approved',
      remark: remark,
      rejectedBy: ''

    };

    this.http.post(
      'https://localhost:7267/api/report/approve-reject',
      body
    ).subscribe({

      next: () => {

        alert('Report Approved');

        this.getReports();

      }

    });

  }

  // REJECT REPORT

  rejectReport(report: any) {

    const remark =
      prompt('Enter Rejection Remark');

    const body = {

      id: report.id,
      status: 'Rejected',
      remark: remark,
      rejectedBy: this.role

    };

    this.http.post(
      'https://localhost:7267/api/report/approve-reject',
      body
    ).subscribe({

      next: () => {

        alert('Report Rejected');

        this.getReports();

      }

    });

  }

  // RESET

  resetForm() {

    this.reportModel = {

      id: 0,
      schemeName: '',
      district: '',
      month: '',
      remark: '',
      status: 'Pending',
      rejectedBy: '',
      pdfFile: null

    };

  }

}