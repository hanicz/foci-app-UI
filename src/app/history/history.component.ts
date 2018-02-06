import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../services/league.service';
import { League } from '../entities/league';
import { History } from '../entities/history';
import {MatTableDataSource} from '@angular/material';
import { MatchService } from '../services/match.service';
import { User } from '../entities/user';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  selectedLeague: League;
  leagues: League[];
  historyRecords: History[];

  users: User[];

  columns = [
    { columnDef: 'match',    header: 'Match',       cell: (row: History) => `${row.home} - ${row.away}`        }
  ];

  displayedColumns = this.columns.map(x => x.columnDef);

  dataSource = new MatTableDataSource<History>();

  constructor(private leagueService: LeagueService,
              private matchService: MatchService) { }

  ngOnInit() {
    this.leagueService.get_all_leagues().subscribe((json: Object) =>{
      this.leagues = json as League[];
      this.leagues.forEach((l) => {
        if(l.ID == 464){
          this.selectedLeague = l;
          this.load_table();
        }
      });
    },
    error => {
    });
  }

  load_table(){

    this.matchService.get_histroy_users(this.selectedLeague.ID).subscribe((json: Object) =>{
      this.users = json as User[];
    },
    error => {
    });


    this.matchService.get_histroy_matches(this.selectedLeague.ID).subscribe((json: Object) =>{
      this.historyRecords = json as History[];
      this.dataSource = new MatTableDataSource<History>(this.historyRecords);
    },
    error => {
    });
  }

}
