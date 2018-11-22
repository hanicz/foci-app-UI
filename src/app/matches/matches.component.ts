import { Component, OnInit } from '@angular/core';

import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { Tipp } from '../entities/tipp';
import { MatchService } from '../services/match.service';
import { LeagueService } from '../services/league.service';
import { League } from '../entities/league';
import { TippService } from '../services/tipp.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  tipps: Tipp[];
  selectedLeague: League;
  leagues: League[];

  displayedColumns = ['match', 'tipp', 'start'];
  dataSource = new MatTableDataSource<Tipp>();

  constructor(private leagueService: LeagueService,
    private matchService: MatchService,
    private tippService: TippService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.leagueService.get_active_leagues().subscribe((json: Object) => {
      this.leagues = json as League[];
      this.leagues.forEach((l) => {
        if (l.id == 2001) {
          this.selectedLeague = l;
          this.load_table();
        }
      });
    },
      error => {
      });
  }

  score_change(tippRecord: Tipp) {
    var pattern = /^\d{1,2}-\d{1,2}$/;

    if (!(pattern.test(tippRecord.score))) {
      tippRecord.score = "";
    } else {
      this.tippService.regist_tipp(tippRecord).subscribe((json: Object) => {
        let extraClasses = ['background-green'];
        this.snackBar.open("Prediction saved", null, {
          duration: 2000,
          panelClass: extraClasses
        });
      },
        error => {
          tippRecord.score = "";
          let extraClasses = ['background-red'];
          this.snackBar.open("Failed to save prediction", null, {
            duration: 2000,
            panelClass: extraClasses
          });
        });
    }
  }

  load_table() {
    this.matchService.get_timed_matches(this.selectedLeague.id).subscribe((json: Object) => {
      this.tipps = json as Tipp[];
      this.dataSource = new MatTableDataSource<Tipp>(this.tipps);
    },
      error => {
      });
  }

}

