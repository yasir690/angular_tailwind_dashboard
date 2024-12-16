import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { authguardGuard } from './authguard.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent,
  },
  { path: 'dashboard', component: DashboardComponent,
    canActivate:[authguardGuard] 
  },
  { path: 'user', component: UserComponent ,
    canActivate:[authguardGuard]
  },
  { path: 'vehicle', component: VehicleComponent ,
    canActivate:[authguardGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];
