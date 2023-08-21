import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';
  streetAddress: string = '';
  city: string = '';
  state: string = '';
  zipcode: string = '';
  userName: string = '';
  password: string = '';

  constructor(private router: Router , private service : RegistrationService){}

  onSignup() {


    this.service.saveCustomer({
      firstName: this.firstName ,
      lastName :this.lastName,
      dateOfBirth: this.dateOfBirth,
      streetAddress: this.streetAddress,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      userName: this.userName,
      password: this.password ,
  
    }).subscribe();
    this.router.navigate(['/']);
  }

}
