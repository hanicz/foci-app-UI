import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  email: string;

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      this.reset();
    }
  }

  reset() {
    if (this.emailControl.valid) {
      this.userService.reset(this.email).subscribe((json: Object) => {
        this.router.navigate(['/resetpassword']);
      },
        error => {
          this.email = "";
        }
      );
    } else {
      this.emailControl.markAsTouched();
    }
  }

}
