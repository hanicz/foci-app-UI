import { Component, OnInit, HostListener } from '@angular/core';
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

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if(event.keyCode == 13){
      this.login();
    }
  }

  login(): void {

    if (this.username.valid && this.password.valid) {

      this.userService.login_user(this.user).subscribe((json: Object) => {
        this.router.navigate(['/table']);
      },
        error => {
          this.user.reset();
        }
      );
    }else{
      if(!this.username.valid) this.username.markAsTouched();
      if(!this.password.valid) this.password.markAsTouched();
    }

  }

}
