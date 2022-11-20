import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  hide = true;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this._signupForm();
  }

  private _signupForm() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required], Validators.pattern("('^[1-9][0-9\-\(\)\.]{7,32}$')")],
      email: ['', [Validators.required], Validators.email],
      password: ['', [Validators.required], Validators.minLength(8)],
      password2: ['', [Validators.required]]
    }, {validator: passwordMatchValidator});
  }

get password(){
  return this.signupForm.get('password');
}
get password2() {
 return this.signupForm.get('password2');
}

onPasswordInput() {

  if (this.signupForm.hasError('passwordMismatch'))
    this.password2.setErrors([{'passwordMismatch': true}]);
  else
    this.password2.setErrors(null);
}

}

export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  if (formGroup.get('password').value === formGroup.get('password2').value)
    return null;
  else
    return {passwordMismatch: true};
};
