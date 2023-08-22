import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  fieldTextType = false;
  signInForm!: FormGroup;
  submitted!: boolean;
  responseData: any | undefined;
  loading!: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private mesService: MessageService,
    private regService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signInForm.controls;
  }

  signIn() {
    this.submitted = true;
    if (this.signInForm.invalid) {
      console.log(this.signInForm.value);
      
      return;
    }
    this.loading = true;
    this.regService.signIn(this.signInForm.value).subscribe(
      (data: any) => {
        console.log(data);
        
        localStorage.setItem('res', JSON.stringify(data))
        this.loading = false;
          this.router.navigate(['/details']);
      },
      (err) => {
        console.log(err);
        
        this.loading = false;
      }
    );
  }
}