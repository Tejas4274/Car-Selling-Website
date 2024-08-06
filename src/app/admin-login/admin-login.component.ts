import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { delay } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  checkadmin(logForm: NgForm) {
    let user: any = logForm.controls['username'].value;
    let pass: any = logForm.controls['password'].value;
  
    console.log(user + '--------' + pass);
    this.http
      .get('http://localhost:9090/checkadmin/' + user + '/' + pass)
      .subscribe(
        (data) => {
          if (data != null) {
            this.router.navigate(['/dashboard']);
            localStorage.setItem('currentuser', user);          
            Swal.fire({
              icon: 'success',
              title: 'WOW...',
              text: 'Login Succesfully',
              
            });         
        
               
            

          } else
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Login Failed Password or Username Is Incorrect',
            });
         
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Failed',
          });
       
        }
      );
  }
}
