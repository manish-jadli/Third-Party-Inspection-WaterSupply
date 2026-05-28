import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspection',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css']
})
export class InspectionComponent implements OnInit {

  constructor() { }

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

  ngOnInit() {
  }

}
