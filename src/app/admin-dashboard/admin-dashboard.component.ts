import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit {
  currentuser: any;
  totalcar: number = 0;
  totalcust: number = 0;
  totaluser: number = 0;
  cars: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.totalCar();
    this.totalCust();
    this.getLink();
    this.totalUser();
  }
  Operations(): void {
    this.router.navigate(['/adminoperation']);
  }

  UpdateOperation(): void {
    this.router.navigate(['/deletecar']);
  }

  DeleteOperation(): void {
    this.router.navigate(['/deletecar']);
  }

  totalCar() {
    this.http.get('http://localhost:9090/car').subscribe((data: any) => {
      console.log(data);
      this.totalcar = data;
    });
  }

  totalCust() {
    this.http.get('http://localhost:9090/cust').subscribe((data: any) => {
      console.log(data);
      this.totalcust = data;
    });
  }

  totalUser() {
    this.http.get('http://localhost:9090/totaluser').subscribe((data: any) => {
      console.log(data);
      this.totaluser = data;
    });
  }

  getLink() {
    this.http.get<any[]>('http://localhost:9090/linkcarname').subscribe(
      (data) => {
        this.cars = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
