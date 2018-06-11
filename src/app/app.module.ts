import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router/app-router.module';
import { LoginComponent } from './login/login.component';
import { ChartsModule, BaseChartDirective } from 'ng2-charts/ng2-charts';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatOptionModule,
  MatFormFieldModule
} from '@angular/material';
import { UserService } from './services/user.service';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { LeagueService } from './services/league.service';
import { TableService } from './services/table.service';
import { MatchesComponent } from './matches/matches.component';
import { MatchService } from './services/match.service';
import { TippService } from './services/tipp.service';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';
import { SelectteamComponent } from './selectteam/selectteam.component';
import { TeamService } from './services/team.service';
import { StatisticComponent } from './statistic/statistic.component';
import { StatisticService } from './services/statistic.service';
import { ResetComponent } from './reset/reset.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TableComponent,
    MatchesComponent,
    HistoryComponent,
    SettingsComponent,
    SelectteamComponent,
    StatisticComponent,
    ResetComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRouterModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [ UserService, LeagueService, TableService, MatchService, TippService, TeamService, StatisticService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
