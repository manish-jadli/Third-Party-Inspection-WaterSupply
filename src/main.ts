import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routing.module';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), importProvidersFrom(AppRoutingModule, FormsModule)],
}).catch((err) => console.error(err));