import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrl: './registered-users.component.scss',
})
export class RegisteredUsersComponent {
  highcharts = Highcharts;
  chartOptions: Highcharts.Options =  {
    chart: {
      type: 'line'
    },
    title: {
      text: undefined
    },
    xAxis: {
      categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
      className: 'paragraph-small-text-regular-for-chart',
      lineColor: '#E6E8F3'
    },
    yAxis: {
      className: 'paragraph-small-text-for-chart',
      title: {
        text: undefined
      },
      labels: {
        formatter: function () {
          return this.value + 'K';
        }
      },
      // max: 30,
    },
    plotOptions: {
      line: {
        showInLegend: false
      }
    },
    series: [{
      name: 'Data',
      type: 'line',
      data: [12, 15.5, 14.8, 18, 19.5, 17.8, 23],
      color: '#7AA5D9',
      marker: {
        enabled: false
      }
    }],
    credits: {
      enabled: false,
    },
  };
}
