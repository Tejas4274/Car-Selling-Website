import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  //this will inject the httpclient to rest api
  constructor(private http: HttpClient, private router: Router) {}

  //this method will post the data of the form in the rest api
  saveuser(regForm: NgForm) {
    this.http.post('http://localhost:9090/adduser', regForm.value).subscribe(
      (data) => {
        alert('Register Sucessfully');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Registeration Fail' + error);
      }
    );
  }
}
