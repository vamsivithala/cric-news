import { Component, OnInit } from '@angular/core';
import { playerScore } from '../players.mock-data1';
import * as Highcharts from 'highcharts';

import HC_data from 'highcharts/modules/data';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';
@Component({
  selector: 'app-playersscores',
  templateUrl: './playersscores.component.html',
  styleUrls: ['./playersscores.component.scss']
})
export class PlayersscoresComponent implements OnInit {
  chartOptions: {} | undefined;

  ngOnInit(): void {
    const chartData = playerScore.scores.map(player => ({ name: player.playername, y: player.playerruns }));

    this.chartOptions = {
      chart: {
        height: 500,
        type: 'column'
      },
      title: {
        text: 'Players Runs'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Runs'
        }
      },
      series: [{
        name: 'Runs',
        data: chartData
      }]
    };

    HC_data(Highcharts);
    HC_exporting(Highcharts);
    HC_exportData(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

    Highcharts.chart('chart-container', this.chartOptions);
  }
}