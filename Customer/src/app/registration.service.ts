import { Injectable } from '@angular/core';
import { Customer } from './customer'
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
   customerDetails = new BehaviorSubject({});

  constructor(private _http : HttpClient) { }


  public signIn(customer: any){
    return this._http.post("http://localhost:8085/registration/login", customer);
   }
  public signUp(customer: any){
    return this._http.post("http://localhost:8085/registration/addCustomer", customer);
   }


   



}