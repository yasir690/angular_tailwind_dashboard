import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common'; // Use CommonModule for structural directives

@Component({
  selector: 'app-root',
  standalone: true,  // Mark as a standalone component
  imports: [
    RouterOutlet,
    CommonModule,     // For ngIf, ngFor, etc.
    FooterComponent,
    HeaderComponent,
    LoginComponent,   // Import the login component here
    UserComponent,
    VehicleComponent,
    DashboardComponent,
    RouterModule,
    // Remove ToastrModule.forRoot() from here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router){}
  title = 'angular_tailwindcss_dashboard';
  showHeaderAndFooter = true;
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
