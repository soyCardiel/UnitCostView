import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = {} as FormGroup ;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onLogin(ev: any): void {
    this.router.navigate(['/projects']);
  }

}
