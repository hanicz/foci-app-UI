import { Component, OnInit, ViewChild } from '@angular/core';

import { LeagueService } from '../services/league.service';
import { League } from '../entities/league';
import { StatisticService } from '../services/statistic.service';
import { Statistic } from '../entities/statistic';
import { Chart, ChartPoint } from 'chart.js';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  selectedLeague: League;
  leagues: League[];
  chart: Chart;
  labels: string[];
  amounts: Number[];
  colors: string[];
  selectedType: {value: string, viewValue: string};
  statistic: Statistic;

  types = [
    { value: 'notipp', viewValue: 'No tipp' },
    { value: '3', viewValue: '3 pointer' },
    { value: '2', viewValue: '2 pointer' },
    { value: '1', viewValue: '1 pointer' },
    { value: '0', viewValue: '0 pointer' }
  ];

  constructor(private leagueService: LeagueService,
    private statistiService: StatisticService) { }

  ngOnInit() {
    this.leagueService.get_all_leagues().subscribe((json: Object) => {
      this.leagues = json as League[];
      this.leagues.forEach((l) => {
        if (l.id == 464) {
          this.selectedLeague = l;
        }
      });
    },
      error => {
      });
  }

  get_statistic() {
    this.statistiService.get_statistic(this.selectedLeague.id,this.selectedType.value).subscribe((json: Object) =>{
      this.statistic = json as Statistic;

      this.labels = [];
      this.amounts = [];
      this.colors = [];
      this.build_chart();
    },
    error => {
    });
  }

  build_chart() {
    for(var i = 0; i < this.statistic.users.length; i++){
      this.labels.push(this.statistic.users[i]);
      this.amounts.push(this.statistic.statistics[i]);
      this.colors.push(this.getRandomColor());
    }

    if (this.chart !== undefined) {
      this.chart.destroy();
    }

    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.amounts as ChartPoint[],
            backgroundColor: this.colors
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Tipp statistics'
        }
      }
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