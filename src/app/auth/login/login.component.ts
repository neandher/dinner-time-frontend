import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../core/models/user.model';
import {UserService} from '../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const user: User = <User>{
      email: 'neanhder89@gmail.com',
      token: '123456',
      username: 'neandher.carlos',
    };
    this.userService.setAuth(user);
    this.router.navigateByUrl('/dashboard');
  }
}
