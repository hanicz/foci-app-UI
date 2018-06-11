import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  hide = true;

  token:string;
  password: string;

  passwordControl = new FormControl('', [Validators.required]);
  tokenControl = new FormControl('', [Validators.required]);

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      this.save();
    }
  }

  save(){
    if (this.tokenControl.valid && this.passwordControl.valid) {
      this.userService.resetWithToken(this.password, this.token).subscribe((json: Object) => {
        this.router.navigate(['/login']);
      },
        error => {
          this.password = "";
          this.token = "";
        }
      );
    } else {
      if (!this.tokenControl.valid) this.tokenControl.markAsTouched();
      if (!this.passwordControl.valid) this.passwordControl.markAsTouched();
    }
  }

}
