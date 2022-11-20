import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newForm: FormGroup;
  hide = true;

  @ViewChild('loginForm') loginForm: NgForm;

  constructor(private fb:FormBuilder) {
   }

  ngOnInit(): void {
    this.userform();
  }


   userform(){
    this.newForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(){
  console.log(this.newForm.value)
  this.loginForm.resetForm() ;
  }


}
