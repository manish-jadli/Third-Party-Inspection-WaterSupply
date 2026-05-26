import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspections',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.css']
})
export class InspectionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
