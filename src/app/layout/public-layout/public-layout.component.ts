import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/public/header/header.component";
import { FooterComponent } from "../../components/public/footer/footer.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-public-layout',
  standalone:true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.css'],
})
export class PublicLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
