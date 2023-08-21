import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  password: string = '';

  ngOnInit(){

  }

  onLogin() {
    console.error('test1111')
    this.service.getCustomer().pipe(
      tap((x) => {
       const details = x.filter( (y: { userName: string; })=> y.userName ===this.userName);
        this.service.customerDetails.next(details[0])
        this.router.navigate(['/details'])
      })
    ).subscribe()

  }

  constructor(private router : Router , private service : RegistrationService){}

  onSignup() {
    this.router.navigate(['/registration']);
  }

}
