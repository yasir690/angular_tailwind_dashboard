import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice/userservice.service';
import { ToastrService } from 'ngx-toastr';

// Define the User interface
interface User {
  userType: string;
  userName: string;
  userEmail: string;
  deviceType: string;  // Corrected the typo here
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})


export class UserComponent implements OnInit {

  constructor(
    private userservice: UserserviceService,
    private toastr: ToastrService // ToastrService is injected directly here
  ) {}
  users:User[] = [];
 
  
  loading: boolean = true;
  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    this.userservice.getuser().subscribe({
      next: (response) => {
        console.log(response.data);
        
        this.users = response.data;
        this.toastr.success(response.message, 'Success', {
          positionClass: 'toast-top-right', // Default position for toastr
          timeOut: 5000, // Optional timeout
          progressBar: true, // Show a progress bar
          toastClass: 'bg-green-500 text-white p-4 rounded-lg shadow-lg', // Tailwind classes
          titleClass: 'font-bold text-lg',
          messageClass: 'text-sm',
        });
      },
    });
  }
 
}
