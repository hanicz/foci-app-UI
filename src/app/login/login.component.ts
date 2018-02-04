import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  user = new User();

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  login(): void {

    if (this.username.valid && this.password.valid) {

      this.userService.login_user(this.user).subscribe((json: Object) => {
        console.log("wat");
        this.router.navigate(['/table']);
      },
        error => {
          console.error('Error: ' + error);
          console.log(this.router.url);
        }
      );
    }
  }

}
