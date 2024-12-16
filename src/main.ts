import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Import BrowserAnimationsModule here
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { ToastrModule } from 'ngx-toastr';  // Import ToastrModule here

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    importProvidersFrom(BrowserAnimationsModule),  // Provide BrowserAnimationsModule here
    importProvidersFrom(HttpClientModule),         // Provide HttpClientModule here
    importProvidersFrom(ToastrModule.forRoot())    // Provide ToastrModule.forRoot() here
  ]
}).catch((err) => console.error(err));
