import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardserviceService } from '../services/dashboardservice/dashboardservice.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalUsers: number = 0; 
  androidUsers: number = 0;
  iosUsers: number = 0;
  webUsers: number = 0;

  constructor(private dashboardservice:DashboardserviceService){}

  ngOnInit(): void {
    this.fetchdata()
  }
  fetchdata(){
    this.dashboardservice.countuser().subscribe(
      (data)=>{
        this.totalUsers=data.data;
      },
      (error)=>{
        console.error('Error fetching total users:', error);

      }
    )
    this.dashboardservice.androiduser().subscribe(
      (data)=>{
        this.androidUsers=data.data;
      },
      (error)=>{
        console.error('Error fetching total users:', error);

      }
    )
    this.dashboardservice.iosuser().subscribe(
      (data)=>{
        this.iosUsers=data.data;
      },
      (error)=>{
        console.error('Error fetching total users:', error);

      }
    )
    this.dashboardservice.webuser().subscribe(
      (data)=>{
        this.webUsers=data.data;
      },
      (error)=>{
        console.error('Error fetching total users:', error);

      }
    )
  }
}
