import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-bookings-over-periods',
  templateUrl: './bookings-over-periods.component.html',
  styleUrl: './bookings-over-periods.component.scss',
})
export class BookingsOverPeriodsComponent {
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
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
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
        color: '#DC5EB2',
        lineWidth: 2,
        data: [
          220,
          185,
          190,
          220,
          210,
          270,
          270,
          420,
          460,
          720,
          715,
          890,
        ],
      },
      {
        name: '2021',
        marker: {
          enabled: false
        },
        type: 'line',
        color: '#DC5EB2',
        dashStyle: 'ShortDash',
        data: [
          140,
          160,
          150,
          270,
          195,
          395,
          410,
          485,
          420,
          800,
          770,
          840,
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };
}
