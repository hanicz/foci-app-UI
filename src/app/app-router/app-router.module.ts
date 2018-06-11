import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppRouterRoutingModule } from './app-router-routing.module';
import { LoginComponent }  from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { TableComponent } from '../table/table.component';
import { MatchesComponent } from '../matches/matches.component';
import { HistoryComponent } from '../history/history.component';
import { SettingsComponent } from '../settings/settings.component';
import { SelectteamComponent } from '../selectteam/selectteam.component';
import { StatisticComponent } from '../statistic/statistic.component';
import { ResetComponent } from '../reset/reset.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'table',  component: TableComponent },
  { path: 'matches',  component: MatchesComponent },
  { path: 'history',  component: HistoryComponent },
  { path: 'settings',  component: SettingsComponent },
  { path: 'select',  component: SelectteamComponent },
  { path: 'statistic',  component: StatisticComponent },
  { path: 'reset',  component: ResetComponent },
  { path: 'resetpassword',  component: ResetpasswordComponent }
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
