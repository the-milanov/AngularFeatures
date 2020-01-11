import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, RequiredValidator, EmailValidator, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-formstesting',
  templateUrl: './formstesting.component.html',
  styleUrls: ['./formstesting.component.scss']
})
// Reactive forms
// ReactiveFormsModule, FormControl, FormGroup, FormBuilder, (ngSubmit), formControlName, formGroup, formGroupName, valueChanges
// value, setVaslue, getValue, patchValue, Validators
export class FormstestingComponent implements OnInit {
  registerForm = this.fb.group({
    firstName: [''],
    lastName: ['', ],
    email: ['', Validators.email],
    confirmEmail: ['', Validators.email],
    password: ['', [Validators.minLength(10), Validators.required]],
    confirmPassword: ['']
  });
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(true)
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.loginForm.value);
  }
  onRegisterSubmit() {
    console.log(this.registerForm.value);
  }
}
