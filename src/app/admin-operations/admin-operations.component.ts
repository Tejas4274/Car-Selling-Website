import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-operations',
  templateUrl: './admin-operations.component.html',
  styleUrl: './admin-operations.component.css',
})
export class AdminOperationsComponent {
  //this will inject the httpclient to rest api
  constructor(private http: HttpClient, private router: Router) {}

  UpdateOperation(): void {
    this.router.navigate(['/deletecar']);
  }

  DeleteOperation(): void {
    this.router.navigate(['/deletecar']);
  }

  addCar(addForm: NgForm) {
    this.http.post('http://localhost:9090/addcar', addForm.value).subscribe(
      (data) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      },

      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        this.router.navigate(['/adminoperation']);
      }
    );
  }
}
