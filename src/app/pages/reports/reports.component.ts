import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  standalone: false,
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