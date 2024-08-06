import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-my-cars',
  templateUrl: './view-my-cars.component.html',
  styleUrl: './view-my-cars.component.css',
})
export class ViewMyCarsComponent implements OnInit {
  cars: any = [];
  user: any;
  carname: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCust();
  }

  getCust() {
    this.user = localStorage.getItem('currentuser');
    this.getCarName(this.user);
  }
  getCarName(user: any) {
    this.http
      .get('http://localhost:9090/getcarname' + '/' + user, {
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          this.carname = response;
          console.log(this.carname);
          this.getCar(this.carname);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getCar(carname: any) {
    this.http
      .get<any[]>('http://localhost:9090/getbycar' + '/' + carname)
      .subscribe(
        (data) => {
          this.cars = data;
          console.log(this.cars);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
