import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';
import { LeagueService } from '../services/league.service';
import { Tablerecord } from '../entities/tablerecord';
import { League } from '../entities/league';

import {MatTableDataSource} from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableRecords: Tablerecord[];
  selectedLeague: League;
  leagues: League[];

  displayedColumns = ['name', 'point'];
  dataSource = new MatTableDataSource<Tablerecord>();

  constructor(private tableService: TableService,
              private leagueService: LeagueService) { }

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
    this.tableService.get_table(this.selectedLeague.ID).subscribe((json: Object) => {
      console.log(json);
      this.tableRecords = json as Tablerecord[];
      this.dataSource = new MatTableDataSource<Tablerecord>(this.tableRecords);
    },
      error => {
      }
    );
  }

}

