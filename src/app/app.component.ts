import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import 'hammerjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menuHidden:boolean;
  table: String;

  constructor(
    private location: Location,
    private router: Router,
    private userService: UserService
  ) {
    this.table = "";
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        var pathString = location.path();
        this.menuHidden = !(['/login','/register'].indexOf(location.path()) > -1);
      }
  });
  }

  logout(): void{
    this.userService
    .logout().subscribe((json: Object) => {
      this.router.navigate(['/login']);
    },
    error => {
      console.error('Error: ' + error);
    }
    );
  }

  delete(): void{
    var del = window.confirm('Arey you sure you want to delete your account ?')
    if (del == true) {
      this.userService
      .delete().subscribe((json: Object) => {
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error: ' + error);
      }
      );
    }
  }
}
