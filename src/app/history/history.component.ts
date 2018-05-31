import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../services/league.service';
import { League } from '../entities/league';
import { History } from '../entities/history';
import { MatTableDataSource } from '@angular/material';
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
    { columnDef: 'match', header: 'Match', cell: (row: History) => `${row.home} - ${row.away}` }
  ];

  displayedColumns = this.columns.map(x => x.columnDef);

  dataSource = new MatTableDataSource<History>();

  constructor(private leagueService: LeagueService,
    private matchService: MatchService) { }

  ngOnInit() {
    this.leagueService.get_all_leagues().subscribe((json: Object) => {
      this.leagues = json as League[];
      this.leagues.forEach((l) => {
        if (l.id == 464) {
          this.selectedLeague = l;
          this.get_users();
        }
      });
    },
      error => {
      });
  }

  load_table() {
    this.columns = [
      { columnDef: 'match', header: 'Match', cell: (row: History) => `${row.home} - ${row.away}` },
      { columnDef: 'score', header: 'Score', cell: (row: History) => `${row.hgoals} - ${row.agoals}` }
    ];
    var i = 0;
    this.users.forEach((u) => {
      let index = i;
      var column = {
        columnDef: u.username,
        header: u.username,
        cell: (row: History) => `${(row.tipps[index] == null) ? "" : row.tipps[index]}`
      }
      i++;

      this.columns.push(column);
    }, this.get_matches());

    this.displayedColumns = this.columns.map(x => x.columnDef);
  }

  get_users() {
    this.leagueService.get_users_for_league(this.selectedLeague.id).subscribe((json: Object) => {
      this.users = json as User[];
      this.load_table();
    },
      error => {
      });
  }

  get_matches() {
    this.matchService.get_histroy_tipps(this.selectedLeague.id).subscribe((json: Object) => {
      this.historyRecords = json as History[];

      this.dataSource = new MatTableDataSource<History>(this.historyRecords);
    },
      error => {
      });
  }
}
