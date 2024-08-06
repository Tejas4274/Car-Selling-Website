import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isLogin: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  //this method will post the data of the form in the rest api
  checkuser(logForm: NgForm) {
    let user: any = logForm.controls['username'].value;
    let pass: any = logForm.controls['password'].value;
    console.log(user + '--------' + pass);
    this.http
      .get('http://localhost:9090/checkuser/' + user + '/' + pass)
      .subscribe(
        (data) => {
          if (data != null) {
            localStorage.setItem('currentuser', user);
              window.location.reload();

            Swal.fire({
              icon: 'success',
              title: 'WOW...',
              text: 'Login Succesfully',
            });
          } else
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Login Failed',
              footer: '<a href="#">Why do I have this issue?</a>',
            });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Failed',
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      );
    this.router.navigate(['/']);
  
  }


}
