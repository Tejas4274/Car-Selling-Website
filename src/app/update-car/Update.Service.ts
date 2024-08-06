import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UpdateService {
  car:string='';
    constructor(private http: HttpClient) {}

    getData(){
      const car=localStorage.getItem('CARNAME');
      return this.http.get<any[]>('http://localhost:9090/getbycar'+'/'+car);
    }
}