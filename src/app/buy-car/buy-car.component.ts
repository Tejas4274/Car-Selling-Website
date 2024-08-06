import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrl: './buy-car.component.css',
})
export class BuyCarComponent implements OnInit {
  cardetails:any=[];
  carname:any;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.carname = localStorage.getItem('selectedCar');
    this.http
      .get<any[]>('http://localhost:9090/getbycar' + '/' + this.carname)
      .subscribe(
        (data) => {
          this.cardetails = data;
          console.log(this.cardetails);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  

  Buy(buyForm: NgForm) {
    this.http
      .post('http://localhost:9090/addcustomer', buyForm.value)
      .subscribe(
        (data) => {
          alert('Dont Close The Window Redirecting To The Payment Page');
          this.router.navigate(['/payment']);
        },
        (error) => {
          alert('some error occurs' + error);
        }
      );
  }
}
