import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  fieldTextType = false;
  signUpForm!: FormGroup;
  submitted!: boolean;
  responseData: any | undefined;
  loading!: boolean;
  date = new Date;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private regService: RegistrationService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.signUpForm.controls;
  }


  signUp() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.loading = true;
    this.regService.signUp(this.signUpForm.value).subscribe(
      (data: object) => {
        this.responseData = data
        this.loading = false;
        setTimeout(()=>{
          this.router.navigate(['/signin']);
        },200)
      },
      () => {
        this.loading = false;
      }
    );
  }
}