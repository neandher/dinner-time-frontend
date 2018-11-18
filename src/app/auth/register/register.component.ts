import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../core/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Errors} from '../../core/models/errors.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  isSubmitting = false;
  errors: Errors = {errors: {}};

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) {
    this.form = this.fb.group({
      'nome': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]],
      'estabelecimento': this.fb.group({
        'nome': ['', [Validators.required]],
        'endereco': ['', [Validators.required]],
        'telefone': ['', [Validators.required]],
      })
    });
  }

  ngOnInit() {
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};

    const userRegister = this.form.value;

    this.userService
      .register(userRegister)
      .subscribe(
        data => this.router.navigateByUrl('/login'),
        err => {
          this.errors = {errors: {['']: err.message}};
          this.isSubmitting = false;
        }
      );
  }

}
