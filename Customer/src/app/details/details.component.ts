import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  customer: any;

  //customer = ['mike','dave','08/06/2001','23 carlton ave','Atlanta','GA','38798'];


  //constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {
   // this.customer = this.registrationService.loginCustomer(this.customer);
  }

  constructor(private router : Router,private service :RegistrationService){
    this.service.customerDetails.subscribe(x=>this.customer=x)
  }

  onSave() {
    this.router.navigate(['']);
  }
  
}