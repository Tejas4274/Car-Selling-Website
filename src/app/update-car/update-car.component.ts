import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UpdateService } from './Update.Service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.css',
})
export class UpdateCarComponent implements OnInit {
  cardeatils: any = [];

  constructor(
    private cardata: UpdateService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cardata.getData().subscribe((data) => {
      this.cardeatils = data;
      console.log(this.cardeatils);
    });
  }

  updateCar(updateForm: NgForm) {
    let carName = localStorage.getItem('CARNAME');
    this.http
      .put('http://localhost:9090/updatecar' + '/' + carName, updateForm.value)
      .subscribe(
        (data) => {
          Swal.fire({
            title: 'Good job!',
            text: 'You Just Update A Car Details!',
            icon: 'success',
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      );
    this.router.navigate(['/updatecar']);
  }
}