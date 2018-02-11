import { Component, OnInit } from '@angular/core';
import { Newuser } from '../entities/newuser';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  newuser = new Newuser();
  hidenew = true;
  hideold = true;

  email = new FormControl('', [Validators.pattern('^$|^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]);
  password = new FormControl('', [Validators.required]);

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  save() {
    if (this.email.valid && this.password.valid) {
      this.userService.change_data(this.newuser).subscribe((json: Object) => {
      },
        error => {
        });
    }
  }

}
