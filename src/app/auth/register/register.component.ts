import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../core/services/user.service';
import {User} from '../../core/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

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
