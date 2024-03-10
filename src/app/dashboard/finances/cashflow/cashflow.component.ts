import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-cashflow',
  templateUrl: './cashflow.component.html',
  styleUrl: './cashflow.component.scss'
})
export class CashflowComponent {
  highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    title: {
      text: undefined,
    },
    xAxis: {
      categories: [
        'Sep 2021',
        'Oct 2021',
        'Nov 2021',
        'Dec 2021',
        'Jan 2022',
        'Feb 2022',
      ],
      accessibility: {
        description: 'Months of the year',
      },
      className: 'paragraph-small-text-regular-for-chart',
      lineColor: '#E6E8F3'
    },
    yAxis: {
      className: 'paragraph-small-text-for-chart',
      title: {
        text: undefined,
      },
      labels: {
        formatter: function () {
          return this.value + 'K';
        }
      },
    },
    tooltip: {
      // crosshairs: true,
      shared: true,
    },
    plotOptions: {
      line: {
        // marker: {
        //   radius: 4,
        //   lineColor: '#666666',
        //   lineWidth: 1,
        // },
        showInLegend: false
      },
    },
    series: [
      {
        name: '2022',
        marker: {
          enabled: false
        },
        type: 'line',
        color: '#7CC3B5',
        lineWidth: 2,
        data: [
          12,
          23.5,
          22,
          44,
          44,
          68,
        ],
      },
      {
        name: '2021',
        marker: {
          enabled: false
        },
        type: 'line',
        color: '#7CC3B5',
        dashStyle: 'ShortDash',
        data: [
          10,
          19.5,
          18,
          29,
          38,
          60,
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

}
