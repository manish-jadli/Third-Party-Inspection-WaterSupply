import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schemes',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.css']
})
export class SchemesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
