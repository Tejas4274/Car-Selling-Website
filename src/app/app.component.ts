import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'HeavenOnWheels';
  currentuser: any;
  isLogin: boolean = false;
  private isReloading: boolean = false;

  constructor(private router:Router){}
  
  ngOnInit(): void {
    this.currentuser = localStorage.getItem('currentuser');
    if (this.currentuser == 'GUEST') {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  }

  logout() {
    localStorage.setItem('currentuser', 'GUEST');
    localStorage.setItem('CARNAME','EMPTY');
    this.router.navigate(['/']);
  }

}
