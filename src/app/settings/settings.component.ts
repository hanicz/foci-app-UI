import { Component, OnInit } from '@angular/core';
import { ChangeUser } from '../entities/changeuser';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  changeUser: ChangeUser;
  hidenew = true;
  hideold = true;

  email = new FormControl('', [Validators.pattern('^$|^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]);
  password = new FormControl('', [Validators.required]);

  constructor(private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
    this.changeUser = new ChangeUser();
    this.userService.getPublicUser().subscribe((json: Object) => {
      this.changeUser = json as ChangeUser;
    },
      error => {

      });
  }

  save() {
    if (this.email.valid && this.password.valid) {
      this.userService.change_data(this.changeUser).subscribe((json: Object) => {
      },
        error => {
        });
    }
  }

}
