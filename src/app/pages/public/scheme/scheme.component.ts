import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheme',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
