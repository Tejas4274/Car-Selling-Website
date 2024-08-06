import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrl: './delete-car.component.css',
})
export class DeleteCarComponent implements OnInit {
  arr: any[] = [];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.showdetails();
  }
  
  showdetails() {
    this.http.get<any[]>('http://localhost:9090/getallcar').subscribe(
      (data) => {
        this.arr.push(...data);
        console.log(this.arr);
      },

      (error) => {
        alert('Data Not Found');
        this.router.navigate(['/adminoperation']);
      }
    );
  }

  deleteCar(carName: string): void {
    this.http
      .delete('http://localhost:9090/deletebycarname/' + carName)
      .subscribe(
        (data) => {
          Swal.fire({
            icon: 'success',
            title: 'WOW...',
            text: 'Car Deleted Successfully',
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed',
          });
        }
      );

      this.router.navigate(['/deletecar']);
  }

  updateCar(carName:string):void{
    localStorage.setItem('CARNAME', carName);
    this.router.navigate(['/updatecar']);
  }
}
