import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/app/dashboard/dashboard.component';
import { ReportsComponent } from './pages/app/reports/reports.component';
import { UserManagementComponent } from './pages/app/user-managment/user-managment.component';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { HomeComponent } from './pages/public/home/home.component';
import { AboutUsComponent } from './pages/public/about-us/about-us.component';
import { DashboardsComponent } from './pages/public/dashboards/dashboards.component';
import { DocumentsComponent } from './pages/public/documents/documents.component';
import { SchemeComponent } from './pages/public/scheme/scheme.component';
import { InspectionsComponent } from './pages/public/inspections/inspections.component';
import { NotificationsComponent } from './pages/public/notifications/notifications.component';
import { ContactComponent } from './pages/public/contact/contact.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';
import { SchemesComponent } from './pages/app/schemes/schemes.component';
import { InspectionComponent } from './pages/app/inspection/inspection.component';

const routes: Routes = [
  //auth code
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
    {
    path: 'forget-password',
    component: ForgetPasswordComponent,
  },
  //end
  //public part code
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'documents',
        component: DocumentsComponent,
      },
      {
        path: 'dashboard',
        component: DashboardsComponent,
      },
      {
        path: 'scheme',
        component: SchemeComponent,
      },
      {
        path: 'inspections',
        component: InspectionsComponent,
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
  //end
  //app part code
  {
    path: 'app',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
         {
        path: 'schemes',
        component: SchemesComponent,
      },
        {
        path: 'inspection',
        component: InspectionComponent,
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
      {
        path: 'user-management',
        component: UserManagementComponent,
      },
    ],
  },
  //end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
