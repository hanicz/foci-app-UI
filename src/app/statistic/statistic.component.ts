import { Component, OnInit, ViewChild } from '@angular/core';

import { LeagueService } from '../services/league.service';
import { League } from '../entities/league';
import { StatisticService } from '../services/statistic.service';
import { Statistic } from '../entities/statistic';

import { ChartsModule, BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  selectedLeague: League;
  leagues: League[];
  selectedType: {value: string, viewValue: string};

  types = [
    { value: 'notipp', viewValue: 'No tipp' },
    { value: '3', viewValue: '3 pointer' },
    { value: '2', viewValue: '2 pointer' },
    { value: '1', viewValue: '1 pointer' },
    { value: '0', viewValue: '0 pointer' }
  ];


  statistic: Statistic;

  @ViewChild("baseChart")
  chart: BaseChartDirective;

  // Pie
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie';
  colors: string[];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private leagueService: LeagueService,
    private statistiService: StatisticService) { }

  ngOnInit() {
    this.leagueService.get_active_leagues().subscribe((json: Object) => {
      this.leagues = json as League[];
      this.leagues.forEach((l) => {
        if (l.ID == 464) {
          this.selectedLeague = l;
        }
      });
    },
      error => {
      });
  }

  get_statistic() {
    this.statistiService.get_statistic(this.selectedLeague.ID,this.selectedType.value).subscribe((json: Object) =>{
      this.statistic = json as Statistic;
      this.pieChartData = this.statistic.statistics;
      this.pieChartLabels = this.statistic.users;
      this.colors = [];

      for(let i = 0; i < this.statistic.users.length;i ++){
        this.colors.push(this.getRandomColor());
      }

      if (this.chart !== undefined) {
        this.chart.ngOnDestroy();
        this.chart.labels = this.pieChartLabels;
        this.chart.colors = this.colors;
        this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
      }
    },
    error => {
    });
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}