import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
 
  customer!: any
 

  ngOnInit(): void {
    let resData = localStorage.getItem('res');
    if(resData!== null){
      this.customer = JSON.parse(resData)
    }
    console.log(this.customer);
    
  }

  

  
}