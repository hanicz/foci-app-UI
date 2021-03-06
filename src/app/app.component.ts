import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import 'hammerjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  menuHidden:boolean;
  table: String;
  matches: String;
  history: String;
  statistics: String;
  userLabel: String;
  menu : String;

  constructor(
    private location: Location,
    private router: Router,
    private userService: UserService
  ) {
    this.table = "";
    this.matches = "";
    this.history = "";
    this.statistics = "";
    this.userLabel = "";
    this.menu = "";

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        var pathString = location.path();
        this.menuHidden = !(['/login','/register','/reset'].indexOf(location.path()) > -1);
      }
  });
  }

  ngOnInit() {
    
  }

  mouseEnter(){
    this.table = " Table";
    this.matches = " Matches";
    this.history = " History";
    this.statistics = " Statistics";
    this.userLabel = " User";
    this.menu = " Menu";
  }

  mouseLeave(){
    this.table = "";
    this.matches = "";
    this.history = "";
    this.statistics = "";
    this.userLabel = "";
    this.menu = "";
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
