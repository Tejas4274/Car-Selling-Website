import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-explore-cars',
  templateUrl: './explore-cars.component.html',
  styleUrl: './explore-cars.component.css',
})
export class ExploreCarsComponent implements OnInit {
  currentuser: any;
  cars: any[] = [];
  setcar:any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.showdetails();
  }

  checkuser(carName:string): void {
    localStorage.setItem('selectedCar', carName);
    this.currentuser = localStorage.getItem('currentuser');
    if (this.currentuser == 'GUEST') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You Are Not Logged in Please Go To Login',
      });
    } else {
      this.router.navigate(['/buycar']);
    }
  }

  showdetails() {
    this.http.get<any[]>('http://localhost:9090/getallcar').subscribe(
      (data) => {
        this.cars.push(...data);
        console.log(this.cars);
        
      },

      (error) => {
        alert('Data Not Found');
      }
    );
  }
}