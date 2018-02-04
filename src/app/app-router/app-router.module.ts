import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppRouterRoutingModule } from './app-router-routing.module';
import { LoginComponent }  from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { TableComponent } from '../table/table.component';
import { MatchesComponent } from '../matches/matches.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'table',  component: TableComponent },
  { path: 'matches',  component: MatchesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    AppRouterRoutingModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
