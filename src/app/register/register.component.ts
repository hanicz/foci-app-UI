import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;

  user = new User();

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required]);

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  register(): void {


    if (this.username.valid && this.password.valid && this.email.valid) {

      this.userService
        .register_user(this.user)
        .subscribe(
        (json: Object) => {
          this.router.navigate(["/login"]);
        },
        error => console.error('Error: ' + error)
        );
    }
  }

}
