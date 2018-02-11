import { Component, OnInit } from '@angular/core';

import { LeagueService } from '../services/league.service';
import { League } from '../entities/league';
import { TeamService } from '../services/team.service';
import { Favourite } from '../entities/favourite';
import { Team } from '../entities/team';

@Component({
  selector: 'app-selectteam',
  templateUrl: './selectteam.component.html',
  styleUrls: ['./selectteam.component.css']
})
export class SelectteamComponent implements OnInit {

  selectedLeague: League;
  leagues: League[];
  favourites: Favourite[];
  teams: Team[];
  selectedTeam: Team;
  buttonDisabled = false;


  constructor(private leagueService: LeagueService,
    private teamService: TeamService) { }

  ngOnInit() {
    this.leagueService.get_active_leagues().subscribe((json: Object) => {
      this.leagues = json as League[];
      this.leagues.forEach((l) => {
        if (l.ID == 464) {
          this.selectedLeague = l;
        }
        this.get_favourites();
      });
    },
      error => {
      });
  }


  load_input() {
    this.favourites.forEach((f) =>{
      if(f.leagueid == this.selectedLeague.ID) {
        this.teams = [];
        let t = new Team();
        t.id = f.leagueid;
        t.name = f.team
        this.selectedTeam = t;
        this.teams.push(t);
        this.buttonDisabled = true;
        return;
      }
      this.buttonDisabled = false;
      this.get_teams();
    });
  }

  get_favourites(){
    this.teamService.get_selected().subscribe((json: Object) => {
      this.favourites = json as Favourite[];
      this.load_input();
    },
      error => {
      });
  }

  get_teams(){
    this.teamService.get_teams(this.selectedLeague.ID).subscribe((json: Object) => {
      this.teams = json as Team[];
    },
      error => {
      });
  }

  save(){
    
  }

}
