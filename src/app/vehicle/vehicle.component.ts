import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice/userservice.service';
import { ToastrService } from 'ngx-toastr';
import { VehicleserviceService } from '../services/vehicleservie/vehicleservice.service';


interface Vehicle {
  vehicleType: string;
  make: string;
  model: string;
}
@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css'
})
export class VehicleComponent implements OnInit {
  constructor(
    private vehicleservice: VehicleserviceService,
        private toastr: ToastrService // ToastrService is injected directly here
  ){

  }
  loading: boolean = true;

  vehicles:Vehicle[] = [];

  ngOnInit(): void {
    this.fetchdata()
  }
  fetchdata(){
     this.vehicleservice.getvehicle().subscribe({
      next:(response)=>{
        this.vehicles=response.data;
        this.toastr.success(response.message, 'Success', {
          positionClass: 'toast-top-right', // Default position for toastr
          timeOut: 5000, // Optional timeout
          progressBar: true, // Show a progress bar
          toastClass: 'bg-green-500 text-white p-4 rounded-lg shadow-lg', // Tailwind classes
          titleClass: 'font-bold text-lg',
          messageClass: 'text-sm',
        });
      }
     })
  }
}
