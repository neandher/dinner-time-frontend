import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../core/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Errors} from '../../core/models/errors.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isSubmitting = false;
  errors: Errors = {errors: {}};

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) {
    this.form = this.fb.group({
      'username': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};

    const credentials = this.form.value;

    this.userService
      .attemptAuth('login', credentials)
      .subscribe(
        data => this.router.navigateByUrl('/dashboard'),
        err => {
          this.errors = {errors: {['']: err.message}};
          this.isSubmitting = false;
        }
      );
  }
}
