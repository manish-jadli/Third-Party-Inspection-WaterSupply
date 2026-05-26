import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/auth/header/header.component";
import { FooterComponent } from "../../components/auth/footer/footer.component";
import { AppRoutingModule } from "../../app.routing.module";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css'],
  imports: [CommonModule,HeaderComponent, FooterComponent, AppRoutingModule]
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
