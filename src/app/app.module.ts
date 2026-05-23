
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {ReportsComponent} from './pages/reports/reports.component';
import {AppRoutingModule} from './app.routing.module';
import {FooterComponent} from './components/footer/footer.component';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {UserManagementComponent} from './pages/user-managment/user-managment.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    ReportsComponent,
    FooterComponent,
    MainLayoutComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
